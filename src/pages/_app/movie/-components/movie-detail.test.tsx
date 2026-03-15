import { render, screen } from "@testing-library/react"
import { MovieDetail } from "./movie-detail"

const mockMovie = {
  id: 1,
  title: 'Movie 1',
  poster_path: 'poster_path',
  vote_average: 7.009,
  overview: 'Overview',
  release_date: '2025-10-16',
  genres: [{ id: 1, name: 'Genre 1' }, { id: 2, name: 'Genre 2' }]
}

describe('Movie Card', () => {
  it('should render movie card', () => {
    render(<MovieDetail movie={mockMovie} />)

    const movieImage = screen.getByRole('img', { name: mockMovie.title })

    expect(movieImage).toBeInTheDocument()
    expect(movieImage).toHaveAttribute('src', `https://image.tmdb.org/t/p/w500${mockMovie.poster_path}`)
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument()
    mockMovie.genres.forEach((genre) => {
      expect(screen.getByText(genre.name)).toBeInTheDocument()
    })
    expect(screen.getByText('Data de lançamento:')).toBeInTheDocument()
    expect(screen.getByText('16 de outubro de 2025')).toBeInTheDocument()
    expect(screen.getByText('Nota TMDB:')).toBeInTheDocument()
    expect(screen.getByText('7.0')).toBeInTheDocument()
    expect(screen.getByText('Sinopse:')).toBeInTheDocument()
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument()
  })
})