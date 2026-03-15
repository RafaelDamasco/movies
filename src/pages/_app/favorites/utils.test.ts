import { describe, it, expect } from 'vitest'
import { sortFavorites, paginateFavorites } from './utils'
import type { Movie } from '@/services/movies'

describe('sortFavorites', () => {
  it('should sort by title in ascending order (A-Z)', () => {
    const result = sortFavorites(mockMovies, 'title.asc')

    expect(result[0].title).toBe('Avatar')
    expect(result[1].title).toBe('Inception')
    expect(result[2].title).toBe('The Godfather')
    expect(result[3].title).toBe('The Matrix')
  })

  it('should sort by title in descending order (Z-A)', () => {
    const result = sortFavorites(mockMovies, 'title.desc')

    expect(result[0].title).toBe('The Matrix')
    expect(result[1].title).toBe('The Godfather')
    expect(result[2].title).toBe('Inception')
    expect(result[3].title).toBe('Avatar')
  })

  it('should sort by vote_average in descending order (highest first)', () => {
    const result = sortFavorites(mockMovies, 'vote_average.desc')

    expect(result[0].title).toBe('The Godfather')
    expect(result[1].title).toBe('Inception')
    expect(result[2].title).toBe('The Matrix')
    expect(result[3].title).toBe('Avatar')
  })

  it('should sort by vote_average in ascending order (lowest first)', () => {
    const result = sortFavorites(mockMovies, 'vote_average.asc')

    expect(result[0].title).toBe('Avatar')
    expect(result[1].title).toBe('The Matrix')
    expect(result[2].title).toBe('Inception')
    expect(result[3].title).toBe('The Godfather')
  })

  it('should handle single movie', () => {
    const singleMovie = [mockMovies[0]]
    const result = sortFavorites(singleMovie, 'title.asc')

    expect(result).toEqual(singleMovie)
  })
})

describe('paginateFavorites', () => {
  it('should return first page with correct items', () => {
    const result = paginateFavorites(mockMovies, 1, 2)

    expect(result).toHaveLength(2)
    expect(result[0].title).toBe('The Matrix')
    expect(result[1].title).toBe('Avatar')
  })

  it('should return second page with correct items', () => {
    const result = paginateFavorites(mockMovies, 2, 2)

    expect(result).toHaveLength(2)
    expect(result[0].title).toBe('Inception')
    expect(result[1].title).toBe('The Godfather')
  })

  it('should return last page with remaining items', () => {
    const result = paginateFavorites(mockMovies, 2, 3)

    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('The Godfather')
  })

  it('should return all items when itemsPerPage exceeds array length', () => {
    const result = paginateFavorites(mockMovies, 1, 10)

    expect(result).toHaveLength(4)
    expect(result).toEqual(mockMovies)
  })
})

const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'The Matrix',
    poster_path: '/matrix.jpg',
    vote_average: 8.7,
    overview: 'A computer hacker learns about the true nature of reality.',
    release_date: '1999-03-31',
    genres: [{ id: 1, name: 'Action' }]
  },
  {
    id: 2,
    title: 'Avatar',
    poster_path: '/avatar.jpg',
    vote_average: 7.8,
    overview: 'A paraplegic Marine is sent to the moon Pandora.',
    release_date: '2009-12-18',
    genres: [{ id: 2, name: 'Sci-Fi' }]
  },
  {
    id: 3,
    title: 'Inception',
    poster_path: '/inception.jpg',
    vote_average: 8.8,
    overview: 'A thief who steals corporate secrets through dream-sharing.',
    release_date: '2010-07-16',
    genres: [{ id: 1, name: 'Action' }]
  },
  {
    id: 4,
    title: 'The Godfather',
    poster_path: '/godfather.jpg',
    vote_average: 9.2,
    overview: 'The aging patriarch transfers control of his empire.',
    release_date: '1972-03-24',
    genres: [{ id: 3, name: 'Drama' }]
  }
]