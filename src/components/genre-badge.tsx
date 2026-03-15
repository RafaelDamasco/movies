import { Badge } from "./ui/badge"

interface GenreBadgeProps {
  genre: { id: number; name: string }
}

export function GenreBadge({ genre }: GenreBadgeProps) {
  return (
    <Badge key={genre.id}>
      {genre.name}
    </Badge>
  )
}