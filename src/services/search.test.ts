import { api } from '@/lib/axios';
import { fetchSearchMovies } from './search';

vi.mock('@/lib/axios', () => ({
  api: {
    get: vi.fn(),
  },
}));

describe('Search Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('fetchSearchMovies', () => {
    it('should fetch search movie successfully', async () => {
      vi.mocked(api.get).mockResolvedValueOnce('fetch_movies');

      await fetchSearchMovies('Movie 1');

      expect(api.get).toHaveBeenCalledWith('/search/movie', {
        params: {
          query: 'Movie 1',
        },
      });
    });

    it('should handle API errors', async () => {
      vi.mocked(api.get).mockRejectedValueOnce(new Error('fetch_search_movies_error'));

      const result = fetchSearchMovies('Movie 1');

      await expect(result).rejects.toEqual(new Error('fetch_search_movies_error'));
    });
  });
});
