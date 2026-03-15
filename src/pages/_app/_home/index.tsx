import { MovieCard } from '@/components/movie-card';
import { Pagination } from '@/components/pagination';
import { moviesQueryOptions } from '@/services/movies';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { z } from 'zod';

const searchSchema = z.object({
  page: z.number().int().positive().optional(),
});

export const Route = createFileRoute('/_app/_home/')({
  component: Home,
  validateSearch: searchSchema,
  loaderDeps: ({ search }) => ({
    page: search.page,
  }),
  loader: ({ context: { queryClient }, deps: { page } }) =>
    queryClient.ensureQueryData(moviesQueryOptions(page)),
})

function Home() {
  const navigate = Route.useNavigate();
  const { page } = Route.useSearch();
  const { data } = useSuspenseQuery(moviesQueryOptions(page));

  const handlePageChange = (newPage: number) => {
    navigate({ search: { page: newPage } });
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {data.results.map((movie) => (
          <Link to='/movie/$movieId' params={{ movieId: movie.id.toString() }}>
            <MovieCard key={movie.id} movie={movie} />
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
  );
}
