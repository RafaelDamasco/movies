import { api } from '@/lib/axios';
import { fetchMovies } from './movies';

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

    it('should handle API errors', async () => {
      vi.mocked(api.get).mockRejectedValueOnce(new Error('fetch_movies_error'));

      const result = fetchMovies(1);

      await expect(result).rejects.toEqual(new Error('fetch_movies_error'));
    });
  });
});
