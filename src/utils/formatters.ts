export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  })
}

export function formatVoteAverage(voteAverage: number) {
  return voteAverage.toFixed(1)
}