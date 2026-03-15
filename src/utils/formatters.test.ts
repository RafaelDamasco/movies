import { describe, it, expect } from 'vitest'
import { formatDate, formatVoteAverage } from './formatters'

describe('formatDate', () => {
  it('should format date to pt-BR locale', () => {
    const result = formatDate('2024-01-15')
    expect(result).toBe('15 de janeiro de 2024')
  })
})

describe('formatVoteAverage', () => {
  it('should format vote average to one decimal place', () => {
    const result = formatVoteAverage(7.5)
    expect(result).toBe('7.5')
  })

  it('should round to one decimal place', () => {
    const result = formatVoteAverage(7.567)
    expect(result).toBe('7.6')
  })

  it('should handle integer values', () => {
    const result = formatVoteAverage(8)
    expect(result).toBe('8.0')
  })
})
