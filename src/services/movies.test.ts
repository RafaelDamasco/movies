import { api } from '@/lib/axios';
import { fetchMovies, fetchMovie } from './movies';

vi.mock('@/lib/axios', () => ({
  api: {
    get: vi.fn(),
  },
}));

describe('Movies Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('fetchMovies', () => {
    it('should fetch popular movies successfully by page', async () => {
      vi.mocked(api.get).mockResolvedValueOnce('fetch_movies');

      await fetchMovies(2);

      expect(api.get).toHaveBeenCalledWith('/movie/popular', {
        params: {
          page: 2,
        },
      });
    });

    it('should fetch popular movies successfully without page', async () => {
      vi.mocked(api.get).mockResolvedValueOnce('fetch_movies');

      await fetchMovies();

      expect(api.get).toHaveBeenCalledWith('/movie/popular');
    });

    it('should handle API errors', async () => {
      vi.mocked(api.get).mockRejectedValueOnce(new Error('fetch_movies_error'));

      const result = fetchMovies(1);

      await expect(result).rejects.toEqual(new Error('fetch_movies_error'));
    });
  });

  describe('fetchMovie', () => {
    it('should fetch selected movie successfully', async () => {
      vi.mocked(api.get).mockResolvedValueOnce('fetch_movie');

      await fetchMovie('123');

      expect(api.get).toHaveBeenCalledWith('/movie/123');
    });

    it('should handle API errors', async () => {
      vi.mocked(api.get).mockRejectedValueOnce(new Error('fetch_movies_error'));

      const result = fetchMovie('123');

      await expect(result).rejects.toEqual(new Error('fetch_movies_error'));
    });
  });
});
