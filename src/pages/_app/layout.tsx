import { Header } from '@/components/header'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { z } from 'zod'

const searchSchema = z.object({
  query: z.string().optional(),
  page: z.number().int().positive().optional(),
})

export const Route = createFileRoute('/_app')({
  validateSearch: searchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
