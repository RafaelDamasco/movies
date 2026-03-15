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
    it('should fetch popular movies successfully', async () => {
      vi.mocked(api.get).mockResolvedValueOnce('fetch_movies');

      await fetchMovies();

      expect(api.get).toHaveBeenCalledWith('/movie/popular');
    });

    it('should handle API errors', async () => {
      vi.mocked(api.get).mockRejectedValueOnce(new Error('fetch_movies_error'));

      const result = fetchMovies();

      await expect(result).rejects.toEqual(new Error('fetch_movies_error'));
    });
  });
});
