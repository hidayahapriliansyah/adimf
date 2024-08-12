'use client'

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Send, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full pt-16'
    >
      <div
        className='flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-4 mb-4 md:mb-8'
      >
        <Image
          src={'/profile.jpeg'}
          alt='Image profile'
          width={80}
          height={80}
          className='rounded-full'
        />
        <h1 className='text-2xl md:text-5xl font-bold'>Adi Muhamad Firmansyah</h1>
      </div>

      <p className='text-3xl md:text-6xl lg:text-7xl'>
        A driven full-stack developer dedicated to creating web solutions that enhance growth and success.
      </p>

      <p className='mt-2 lg:mt-8 md:mt-4 text-xl md:text-2xl'>
        Over 1 year of experience in full-stack development using Node.js.
      </p>

      <div className='flex flex-wrap gap-2 mt-4 md:mt-8'>
        <Button
          size='lg'
          className='md:text-xl md:py-8'
        >
          Get in touch
          <Send className='ml-1 md:ml-2 h-4 md:h-8 mr-0' />
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='md:text-xl md:py-8'
        >
          Download CV
          <FileText className='ml-1 md:ml-2 h-4 md:h-8' />
        </Button>
      </div>
    </motion.section>
  )
}

export default Hero
