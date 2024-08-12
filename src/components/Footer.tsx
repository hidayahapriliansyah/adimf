import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto p-8 border-t border-t-input'>
      <div className='flex flex-wrap gap-4 mb-4 w-full'>
        <a href="#" className='text-2xl md:text-3xl'>
          <FaLinkedinIn />
        </a>
        <a href="#" className='text-2xl md:text-3xl'>
          <FaGithub />
        </a>
        <a href="#" className='text-2xl md:text-3xl'>
          <BsMedium />
        </a>
        <a href="#" className='text-2xl md:text-3xl'>
          <FaInstagram />
        </a>
      </div>

      <span>Made with Next.js by Adi Muhamad Firmansyah</span>
    </footer>
  )
}

export default Footer