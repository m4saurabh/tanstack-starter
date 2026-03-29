import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main>
      <h1 className="text-8xl">Hello TanStack</h1>
    </main>
  )
}
