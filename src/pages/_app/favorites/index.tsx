import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/favorites/')({
  component: Favorites,
})

function Favorites() {
  return <div className="p-2">Hello from Favorites!</div>
}