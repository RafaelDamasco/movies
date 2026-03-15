import { api } from "@/lib/axios";
import { queryOptions } from "@tanstack/react-query";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  overview: string;
}
export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(): Promise<MoviesResponse> {
  const response = await api.get(`/movie/popular`);
  return response.data
}

export const moviesQueryOptions = queryOptions({
  queryKey: ['movies'],
  queryFn: () => fetchMovies(),
})
