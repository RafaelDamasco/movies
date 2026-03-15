import { createFileRoute, Link } from '@tanstack/react-router'
import { useFavoritesStore } from "@/stores/favorites-store";
import { MovieCard } from "@/components/movie-card";
import { EmptyFavorites } from './-components/empty-favorites';
import { FavoritesHeader } from './-components/favorites-header';
import { Pagination } from '@/components/pagination';
import { useState } from 'react';
import { sortFavorites, paginateFavorites } from './utils';

export const Route = createFileRoute('/_app/favorites/')({
  component: Favorites,
})

const ITEMS_PER_PAGE = 20;

function Favorites() {
  const { favorites } = useFavoritesStore();
  const [filters, setFilters] = useState({
    sortBy: 'title.asc',
    currentPage: 1
  });

  const totalPages = Math.ceil(favorites.length / ITEMS_PER_PAGE);
  const sortedList = sortFavorites(favorites, filters.sortBy);
  const paginatedFavorites = paginateFavorites(sortedList, filters.currentPage, ITEMS_PER_PAGE);

  const handleSortChange = (value: string) => {
    setFilters(prev => ({ ...prev, sortBy: value }));
  };

  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, currentPage: page }));
  };

  if (favorites.length === 0) {
    return <EmptyFavorites />
  }

  return (
    <>
      <FavoritesHeader sortBy={filters.sortBy} onSortChange={handleSortChange} />
      <div className="grid grid-cols-5 gap-4">
        {paginatedFavorites.map((movie) => (
          <Link to='/movie/$movieId' params={{ movieId: movie.id.toString() }}>
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
      <Pagination
        page={filters.currentPage}
        pages={totalPages}
        totalCount={favorites.length}
        onPageChange={handlePageChange}
      />
    </>
  );
}