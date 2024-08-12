'use client'

import React from 'react'

import { Contact } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9 }}
      className='flex justify-start items-center md:items-center gap-2 md:gap-4 mt-16 w-full'
    >
      <Contact className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12' />
      <h1
        className='text-2xl md:text-5xl font-bold'
      >
        Contact & Socials
      </h1>
    </motion.div>
  )
}

export default Hero