import { MovieCard } from '@/components/movie-card'
import { Pagination } from '@/components/pagination'
import { searchMoviesQueryOptions } from '@/services/search'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'

const searchSchema = z.object({
  query: z.string(),
  page: z.number().int().positive().optional(),
})

export const Route = createFileRoute('/_app/search/')({
  validateSearch: searchSchema,
  loaderDeps: ({ search }) => ({
    query: search.query,
    page: search.page,
  }),
  loader: ({ context: { queryClient }, deps: { query, page } }) =>
    queryClient.ensureQueryData(searchMoviesQueryOptions(query, page)),
  component: Search,

})

function Search() {
  const navigate = Route.useNavigate();
  const { query, page } = Route.useSearch()
  const { data } = useSuspenseQuery(searchMoviesQueryOptions(query, page))

  const handlePageChange = (newPage: number) => {
    navigate({ search: { query, page: newPage } })
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Resultados para: "{query}"</h1>
      <p>Encontrados {data.total_results} filmes.</p>
      <div className="grid grid-cols-5 gap-4">
        {data.results.map((movie) => (
          <Link to='/movie/$movieId' params={{ movieId: movie.id.toString() }}>
            <MovieCard key={movie.id} movie={movie} query={query} />
          </Link>
        ))}
      </div>
      <Pagination
        page={page!}
        pages={data.total_pages}
        totalCount={data.total_results}
        onPageChange={handlePageChange}
      />
    </>
  )
}

