"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Ellipsis } from 'lucide-react'

export function ButtonTheme() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = React.useState(false)

  // Ensure the component is only mounted on the client
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <button className="flex items-center justify-center p-2 rounded-md bg-zinc-200 dark:bg-zinc-800 transition-colors"
  >
    <Ellipsis className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
    <span className="sr-only">Loading theme</span>
  </button>

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center p-2 rounded-md bg-zinc-200 dark:bg-zinc-800 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
      ) : (
        <Moon className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
