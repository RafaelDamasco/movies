import { MovieCard } from '@/components/movie-card';
import { moviesQueryOptions } from '@/services/movies';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/_home/')({
  component: Home,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(moviesQueryOptions),
})

function Home() {
  const data = Route.useLoaderData();

  return (
    <div className="grid grid-cols-6 gap-4 ">
      {data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
