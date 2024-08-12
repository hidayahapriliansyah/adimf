'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 1.8 }}
      className='mt-8 h-96'
    >
      <ul className='text-xl md:text-2xl'>
        <li>
          Email:{' '}
          <a href="mailto:adimuhamadfirmansyah@gmail.com" className='hover:underline'>adimuhamadfirmansyah@gmail.com</a>
        </li>
        <li>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/hidayahapriliansyah/" target='_blank' className='hover:underline'>Adi Muhamad Firmansyah</a>
        </li>
        <li>
          Github:{' '}
          <a href="https://github.com/hidayahapriliansyah" target='_blank' className='hover:underline'>hidayahapriliansyah</a>
        </li>
        <li>
          Instagram:{' '}
          <a href="https://www.instagram.com/hidayahapriliansyah/" target='_blank' className='hover:underline'>hidayahapriliansyah</a>
        </li>
      </ul>
    </motion.div>
  )
}

export default Contacts