import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Movie } from '@/services/movies';

interface FavoritesStore {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
  toggleFavorite: (movie: Movie) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (movie: Movie) => {
        set((state) => ({
          favorites: [...state.favorites, movie]
        }));
      },

      removeFavorite: (movieId: number) => {
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== movieId)
        }));
      },

      isFavorite: (movieId: number) => {
        return get().favorites.some((movie) => movie.id === movieId);
      },

      toggleFavorite: (movie: Movie) => {
        const { isFavorite, addFavorite, removeFavorite } = get();
        if (isFavorite(movie.id)) {
          removeFavorite(movie.id);
        } else {
          addFavorite(movie);
        }
      }
    }),
    {
      name: 'favorites-storage'
    }
  )
);
