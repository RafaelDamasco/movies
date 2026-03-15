import { api } from "@/lib/axios";
import type { MoviesResponse } from "./movies";
import { queryOptions } from "@tanstack/react-query";

export const searchMoviesQueryOptions = (query: string, page?: number) =>
  queryOptions({
    queryKey: ['search', { query, page }],
    queryFn: () => fetchSearchMovies(query, page),
  })

export async function fetchSearchMovies(query: string, page?: number): Promise<MoviesResponse> {
  const response = await api.get(`/search/movie`, {
    params: {
      page,
      query
    }
  });
  return response.data
}