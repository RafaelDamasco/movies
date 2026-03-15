import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FavoritesHeaderProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

export const FavoritesHeader = ({ sortBy, onSortChange }: FavoritesHeaderProps) => {

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Meus Filmes Favoritos</h1>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium">Ordenar por:</label>
        <Select
          value={sortBy}
          onValueChange={onSortChange}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title.asc">Ordem Alfabética (A-Z)</SelectItem>
            <SelectItem value="title.desc">Ordem Alfabética (Z-A)</SelectItem>
            <SelectItem value="vote_average.desc">Maior Nota</SelectItem>
            <SelectItem value="vote_average.asc">Menor Nota</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}