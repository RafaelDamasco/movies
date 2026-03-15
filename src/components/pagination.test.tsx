import { render, screen, fireEvent } from "@testing-library/react"
import { Pagination } from "./pagination"

describe('Pagination', () => {
  it('should render pagination', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={1} pages={10} totalCount={100} onPageChange={onPageChange} />)

    expect(screen.getByText('Page 1 of 10')).toBeInTheDocument()
    expect(screen.getByText('Total of 100 movies')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'First page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Last page' })).toBeInTheDocument()
  })

  it('should call onPageChange when clicking next page', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={1} pages={10} totalCount={100} onPageChange={onPageChange} />)

    fireEvent.click(screen.getByRole('button', { name: 'Next page' }))

    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('should call onPageChange when clicking previous page', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={2} pages={10} totalCount={100} onPageChange={onPageChange} />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }))

    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('should call onPageChange when clicking first page', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={10} pages={10} totalCount={100} onPageChange={onPageChange} />)

    fireEvent.click(screen.getByRole('button', { name: 'First page' }))

    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('should call onPageChange when clicking last page', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={1} pages={10} totalCount={100} onPageChange={onPageChange} />)

    fireEvent.click(screen.getByRole('button', { name: 'Last page' }))

    expect(onPageChange).toHaveBeenCalledWith(10)
  })

  it('should disable first and previous buttons on first page', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={1} pages={10} totalCount={100} onPageChange={onPageChange} />)

    expect(screen.getByRole('button', { name: 'First page' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
  })

  it('should disable next and last buttons on last page', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={10} pages={10} totalCount={100} onPageChange={onPageChange} />)

    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Last page' })).toBeDisabled()
  })
})