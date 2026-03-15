import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/_home/')({
  component: Home,
})

function Home() {
  return <div className="p-2">Hello from Home!</div>
}
