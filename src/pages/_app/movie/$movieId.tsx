import { movieQueryOptions } from '@/services/movies'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { MovieDetail } from './-components/movie-detail'

export const Route = createFileRoute('/_app/movie/$movieId')({
  component: RouteComponent,
  loader: ({ context: { queryClient }, params: { movieId } }) => {
    return queryClient.ensureQueryData(movieQueryOptions(movieId))
  },
})

function RouteComponent() {
  const movieId = Route.useParams().movieId
  const { data: movie } = useSuspenseQuery(movieQueryOptions(movieId))

  return (
    <>
      <MovieDetail movie={movie} />

      {/* Create movies related */}
    </>
  )
}
