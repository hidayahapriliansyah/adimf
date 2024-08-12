'use client';

import React, { useState, useEffect } from 'react';

const NavbarDesktop: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      className={`fixed flex justify-center items-center w-full top-0 left-0 z-50 bg-zinc-950 border-b border-b-input text-white py-4 px-8 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
    >
      <ul className='flex gap-4 max-w-7xl mx-auto'>
        <li>
          <a href="/" className='text-xl'>About</a>
        </li>
        <li>
          <a href="/projects" className='text-xl'>Projects</a>
        </li>
        <li>
          <a href="#" className='text-xl'>Contact</a>
        </li>
        <li>
          <a href="#" className='text-xl'>Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
