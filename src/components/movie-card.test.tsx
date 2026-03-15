import { render, screen } from "@testing-library/react"
import { MovieCard } from "./movie-card"

const mockMovie = {
  id: 1,
  title: 'Movie 1',
  poster_path: 'poster_path',
  vote_average: 1,
  overview: 'Overview',
  release_date: '2025-10-16',
  genres: [{ id: 1, name: 'Genre 1' }, { id: 2, name: 'Genre 2' }]
}

describe('Movie Card', () => {
  it('should render movie card', () => {
    render(<MovieCard movie={mockMovie} />)

    const movieImage = screen.getByRole('img', { name: mockMovie.title })

    expect(movieImage).toBeInTheDocument()
    expect(movieImage).toHaveAttribute('src', `https://image.tmdb.org/t/p/w500${mockMovie.poster_path}`)
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument()
    expect(screen.getByText('Nota TMDB:')).toBeInTheDocument()
    expect(screen.getByText('1.0')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Adicionar aos favoritos' })).toBeInTheDocument()
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument()
  })
})