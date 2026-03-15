import { api } from "@/lib/axios";
import { queryOptions } from "@tanstack/react-query";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  overview: string;
  release_date: string;
  genres: {
    id: number;
    name: string;
  }[]
}
export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(page?: number): Promise<MoviesResponse> {
  if (page) {
    const response = await api.get(`/movie/popular`, {
      params: {
        page,
      }
    });
    return response.data;
  }
  const response = await api.get(`/movie/popular`);
  return response.data;
}

export async function fetchMovie(movieId: string): Promise<Movie> {
  const response = await api.get(`/movie/${movieId}`);
  return response.data
}

export const moviesQueryOptions = (page?: number) =>
  queryOptions({
    queryKey: ['movies', { page }],
    queryFn: () => fetchMovies(page),
  })

export const movieQueryOptions = (movieId: string) =>
  queryOptions({
    queryKey: ['movie', { movieId }],
    queryFn: () => fetchMovie(movieId),
  })
