import { GenreBadge } from "@/components/genre-badge"
import { Badge } from "@/components/ui/badge"
import type { Movie } from "@/services/movies"
import { formatDate, formatVoteAverage } from "@/utils/formatters"

interface MovieDetailProps {
  movie: Movie
}

export function MovieDetail({ movie }: MovieDetailProps) {
  return (
    <section className="flex flex-col-reverse gap-8 lg:flex-row">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
      <div className='flex flex-col gap-4'>
        <h1 className="font-bold text-5xl">
          {movie.title}
        </h1>
        <div className='flex gap-2'>
          {movie.genres.map((genre) =>
            <GenreBadge key={genre.id} genre={genre} />
          )}
        </div>
        <div>
          <p className="flex items-center gap-2">
            <strong>Data de lançamento:</strong>
            {formatDate(movie.release_date)}
          </p>
          <p className="flex items-center gap-2">
            <strong>Nota TMDB:</strong>
            <Badge className="font-mono bg-yellow-500 text-black font-bold">
              {formatVoteAverage(movie.vote_average)}
            </Badge>
          </p>
        </div>
        <div>
          <h2 className="font-bold">Sinopse:</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section >
  )
}