'use client'

import React, { useRef } from 'react'
import { ChevronRight, ExternalLink, Github, Highlighter } from 'lucide-react'
import Image from 'next/image'
import StackIcon from 'tech-stack-icons'
import { Button } from './ui/button'
import { motion, useInView } from 'framer-motion'

const HighlightProjects = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: 0, y: 10 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className='w-full mt-16'
    >
      <span className='flex justify-start items-center gap-1 md:gap-2 mb-8'>
        <Highlighter className='inline md:w-7 md:h-7 lg:w-8 lg:h-8' />
        <h2 className='text-xl md:text-3xl font-semibold inline'>Highlighted Projects</h2>
      </span>

      <div className='grid sm:grid-cols-2 gap-4 mb-4 w-full'>
        <div
          className='flex flex-col justify-between items-start py-4 border border-input rounded-lg'
        >
          <div className='flex flex-col gap-4 w-full'>
            <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Ngifent</span>
            <div className='relative w-full aspect-video'>
              <Image
                src={'/projects/contoh.png'}
                alt='Contoh Project'
                fill
                className='object-cover z-10'
              />
            </div>
            <p className='md:text-xl px-4 md:px-4'>E-Ticket platform for managing community event.</p>
            <div className='flex gap-2 px-4 mb-4'>
              <StackIcon name="nodejs" className='w-6 sm:w-8' />
              <StackIcon name="typescript" className='w-6 sm:w-8' />
              <StackIcon name="nextjs2" className='w-6 sm:w-8' />
              <StackIcon name="postgresql" className='w-6 sm:w-8' />
              <StackIcon name="prisma" className='w-6 sm:w-8' />
            </div>
          </div>
          <div className='flex justify-start w-full px-4'>
            <a href='https://ngifent.com' target='_blank'>
              <Button className='md:text-lg'>
                Live
                <ExternalLink className='ml-2' />
              </Button>
            </a>
          </div>
        </div>

        <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
          <div className='flex flex-col gap-4 w-full'>
            <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Prakiraan Cuaca</span>
            <div className='relative w-full aspect-video'>
              <Image
                src={'/projects/prakiraan.jpeg'}
                alt='Prakiraan Cuaca'
                fill
                className='object-cover'
              />
            </div>
            <p className='md:text-xl px-4 md:px-4'>Weather forecasting using openweathermap.org</p>
            <div className='flex gap-2 px-4 mb-4'>
              <StackIcon name="html5" className='w-6 sm:w-8' />
              <StackIcon name="css3" className='w-6 sm:w-8' />
              <StackIcon name="js" className='w-6 sm:w-8' />
            </div>
          </div>
          <div className='flex justify-between w-full px-4'>
            <a href='https://prakiraan-cuaca-fundamental-frontend.vercel.app/' target='_blank'>
              <Button className='md:text-lg'>
                Live
                <ExternalLink className='ml-2' />
              </Button>
            </a>
            <a href='https://github.com/hidayahapriliansyah/prakiraan-cuaca-fundamental-frontend' target='_blank' className='flex justify-center items-center text-white'>
              <Github className='ml-2' />
            </a>
          </div>
        </div>
      </div>

      <a href='/projects' className='mt-4'>
        <Button className='text-xl md:text-2xl'>
          See more projects
          <ChevronRight className='ml-2' />
        </Button>
      </a>
    </motion.section>
  )
}

export default HighlightProjects
