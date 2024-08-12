'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { ButtonTheme } from './ButtonTheme';

const NavbarDesktop: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname()
  const currentPath = pathname.split('/')[1]

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll ke bawah
      } else {
        setShowNavbar(true); // Scroll ke atas
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <nav
      className={`hidden fixed md:flex justify-center items-center w-full top-0 left-0 z-50 bg-zinc-50 dark:bg-zinc-950 border-b border-b-input text-white py-4 px-8 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
    >
      <ul className='flex items-center gap-8 max-w-7xl mx-auto text-primary dark:text-white'>
        <li className={clsx({
          'border-b-2 border-b-zinc-950  dark:border-b-white': currentPath === ''
        })}>
          <a href="/" className={clsx('text-lg', {
            'font-bold': currentPath === ''
          })}>About</a>
        </li>
        <li className={clsx({
          'border-b-2 border-b-zinc-950  dark:border-b-white': currentPath === 'projects'
        })}>
          <a href="/projects" className={clsx('text-lg', {
            'font-bold': currentPath === 'projects'
          })}>Projects</a>
        </li>
        <li className={clsx({
          'border-b-2 border-b-zinc-950  dark:border-b-white': currentPath === 'contact'
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
  );
};

export default NavbarDesktop;