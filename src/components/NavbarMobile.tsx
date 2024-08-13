'use client'

import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ButtonTheme } from './ButtonTheme'

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const currentPath = pathname.split('/')[1]

  return (
    <nav
      className='fixed top-0 left-0 z-50 md:hidden flex justify-end items-center w-full h-16 pr-4'
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex justify-center items-center bg-white dark:bg-zinc-950 border dark:border-white h-8 w-8'
      >
        {
          isOpen
            ? <X />
            : <Menu />
        }
      </button>

      <ul className={clsx('absolute top-16 left-0 flex flex-col gap-4 p-8 w-full bg-zinc-50 dark:bg-zinc-950 text-primary dark:text-white transition-all duration-500', {
        'translate-y-0': isOpen,
        '-translate-y-96': !isOpen,
      })}>
        <li className={clsx({
          'border-b-2 border-b-zinc-950 dark:border-b-white': currentPath === ''
        })}>
          <a href="/" className={clsx('text-lg', {
            'font-bold': currentPath === ''
          })}>About</a>
        </li>
        <li className={clsx({
          'border-b-2 border-b-zinc-950 dark:border-b-white': currentPath === 'projects'
        })}>
          <a href="/projects" className={clsx('text-lg', {
            'font-bold': currentPath === 'projects'
          })}>Projects</a>
        </li>
        <li className={clsx({
          'border-b-2 border-b-zinc-950 dark:border-b-white': currentPath === 'contact'
        })}>
          <a href="/contact" className={clsx('text-lg', {
            'font-bold': currentPath === 'contact'
          })}>Contact & Socials</a>
        </li>
        <li>
          <a href="https://medium.com/@adimuhamadfirmansyah" target='_blank' className='text-lg'>Blog</a>
        </li>
        <li>
          <ButtonTheme />
        </li>
      </ul>
    </nav>
  )
}

export default NavbarMobile