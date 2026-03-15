import { cn } from "@/lib/utils";
import type { Movie } from "@/services/movies";
import { useFavoritesStore } from "@/stores/favorites-store";
import { formatVoteAverage } from "@/utils/formatters";
import { Heart } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorite = favorites.some((fav) => fav.id === movie.id);

  function handleToggleFavorite(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    toggleFavorite(movie);
  }

  return (
    <Card
      className="transition-all duration-200 ease-out hover:scale-[1.02] pt-0"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full object-fill rounded-t-xl h-96"
      />
      <CardHeader className="flex flex-row items-center">
        <div className="flex flex-col gap-2 flex-1">
          <CardTitle>{movie.title}</CardTitle>
          <CardDescription>
            <p className="flex items-center gap-2">
              <strong>Nota TMDB:</strong>
              <Badge className="font-mono bg-yellow-500 text-black font-bold">
                {formatVoteAverage(movie.vote_average)}
              </Badge>
            </p>
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          onClick={handleToggleFavorite}
          className="flex items-center gap-2"
          aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart
            className={cn(
              "size-6",
              favorite ? "fill-red-500 text-red-500" : "text-gray-400"
            )}
          />
        </Button>
      </CardHeader>
      <CardContent className="line-clamp-4">
        <p>{movie.overview}</p>
      </CardContent>
    </Card>
  )
}