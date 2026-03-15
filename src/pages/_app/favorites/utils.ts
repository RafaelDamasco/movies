import type { Movie } from '@/services/movies';

export const sortFavorites = (favorites: Movie[], sortBy: string) => {
  const sorted = [...favorites];

  if (sortBy === 'title.asc') {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'title.desc') {
    sorted.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortBy === 'vote_average.desc') {
    sorted.sort((a, b) => b.vote_average - a.vote_average);
  } else if (sortBy === 'vote_average.asc') {
    sorted.sort((a, b) => a.vote_average - b.vote_average);
  }

  return sorted;
};

export const paginateFavorites = (
  favorites: Movie[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return favorites.slice(startIndex, endIndex);
};
