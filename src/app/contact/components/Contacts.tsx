'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 1.8 }}
      className='mt-8 h-96'
    >
      <ul className='flex flex-col gap-4 text-lg md:text-2xl'>
        <li className='flex flex-wrap justify-start items-center gap-4'>
          <BiLogoGmail className='w-6 h-6 md:w-8 md:h-8 inline' />
          <a href="mailto:adimuhamadfirmansyah@gmail.com" className='hover:underline'>adimuhamadfirmansyah@gmail.com</a>
        </li>
        <li className='flex flex-wrap justify-start items-center gap-4'>
          <FaLinkedinIn className='w-6 h-6 md:w-8 md:h-8 inline' />
          <a href="https://www.linkedin.com/in/hidayahapriliansyah/" target='_blank' className='hover:underline'>Adi Muhamad Firmansyah</a>
        </li>
        <li className='flex flex-wrap justify-start items-center gap-4'>
          <FaGithub className='w-6 h-6 md:w-8 md:h-8 inline' />
          <a href="https://github.com/hidayahapriliansyah" target='_blank' className='hover:underline'>hidayahapriliansyah</a>
        </li>
        <li className='flex flex-wrap justify-start items-center gap-4'>
          <FaInstagram className='w-6 h-6 md:w-8 md:h-8 inline' />
          <a href="https://www.instagram.com/hidayahapriliansyah/" target='_blank' className='hover:underline'>hidayahapriliansyah</a>
        </li>
      </ul>
    </motion.div>
  )
}

export default Contacts