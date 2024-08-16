import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto p-8 border-t border-t-input w-full'>
      <span className='block w-full'>Made with Next.js by Adi Muhamad Firmansyah</span>

      <div className='flex flex-wrap md:justify-end gap-4 w-full mt-4 md:mt-0'>
        <a href="https://linkedin.com/in/hidayahapriliansyah/" target='_blank' className='text-2xl md:text-3xl'>
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/hidayahapriliansyah" target='_blank' className='text-2xl md:text-3xl'>
          <FaGithub />
        </a>
        <a href="https://medium.com/@adimuhamadfirmansyah" target='_blank' className='text-2xl md:text-3xl'>
          <BsMedium />
        </a>
        <a href="https://www.instagram.com/hidayahapriliansyah/" target='_blank' className='text-2xl md:text-3xl'>
          <FaInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer