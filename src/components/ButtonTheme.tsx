"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react'

export function ButtonTheme() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className='w-5 h-5' />

  if (resolvedTheme === 'dark') {
    return <Sun className='w-5 h-5' onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <Moon className='w-5 h-5' onClick={() => setTheme('dark')} />
  }
}
