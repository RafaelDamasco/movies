import type { Movie } from "@/services/movies";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card
      className="transition-all duration-200 ease-out hover:scale-[1.02] pt-0"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full object-cover rounded-t-xl h-96"
      />
      <CardHeader>
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription>{movie.vote_average}</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent className="line-clamp-4">
        <p>{movie.overview}</p>
      </CardContent>
      <CardFooter>
        Ações
      </CardFooter>
    </Card>
  )
}