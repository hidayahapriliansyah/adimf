'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Contacts = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className='mt-8 h-96'
    >
      <ul className='flex flex-col gap-4 text-lg md:text-2xl'>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='flex flex-wrap justify-start items-center gap-4'
        >
          <BiLogoGmail className='w-6 h-6 md:w-8 md:h-8 inline' />
          <a href="mailto:adimuhamadfirmansyah@gmail.com" className='hover:underline'>adimuhamadfirmansyah@gmail.com</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className='flex flex-wrap justify-start items-center gap-4'
        >
          <FaLinkedinIn className='w-6 h-6 md:w-8 md:h-8 inline' />
          <a href="https://www.linkedin.com/in/hidayahapriliansyah/" target='_blank' className='hover:underline'>Adi Muhamad Firmansyah</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='flex flex-wrap justify-start items-center gap-4'
        >
          <FaGithub className='w-6 h-6 md:w-8 md:h-8 inline' />
          <a href="https://github.com/hidayahapriliansyah" target='_blank' className='hover:underline'>hidayahapriliansyah</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className='flex flex-wrap justify-start items-center gap-4'
        >
          <FaInstagram className='w-6 h-6 md:w-8 md:h-8 inline' />
          <a href="https://www.instagram.com/hidayahapriliansyah/" target='_blank' className='hover:underline'>hidayahapriliansyah</a>
        </motion.li>
      </ul>
    </section>
  )
}

export default Contacts