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
      transition={{ duration: 0.9 }}
      className='w-full pt-16'
    >
      <h1 className='text-2xl md:text-5xl mb-2 md:mb-4 font-bold'>Adi Muhamad Firmansyah</h1>

      <p className='text-3xl md:text-6xl lg:text-7xl'>
        A full-stack developer focused on building scalable back-end solutions and crafting seamless user experiences.
      </p>

      <p className='mt-2 lg:mt-8 md:mt-4 text-xl md:text-2xl'>
        Over 1 year of experience in full-stack development using Node.js.
      </p>

      <div className='flex flex-wrap gap-2 mt-4 md:mt-8'>
        <a href="mailto:adimuhamadfirmansyah@gmail.com">
          <Button
            size='lg'
            className='md:text-xl md:py-8'
          >
            Get in touch
            <Send className='ml-1 md:ml-2 h-4 md:h-8 mr-0' />
          </Button>
        </a>
        <a href="https://drive.google.com/file/d/1Cd6JTq5BGDiyLbf5sc2UzDY2tKEook9D/view?usp=sharing" target='_blank'>
          <Button
            variant='outline'
            size='lg'
            className='md:text-xl md:py-8'
          >
            Download CV
            <FileText className='ml-1 md:ml-2 h-4 md:h-8' />
          </Button>
        </a>
      </div>
    </motion.section>
  )
}

export default Hero
