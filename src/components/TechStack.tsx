'use client'

import { useInView, motion } from 'framer-motion'
import { Pickaxe } from 'lucide-react'
import React, { useRef } from 'react'
import StackIcon from 'tech-stack-icons'

const TechStack = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: 0, y: 10 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className='mt-8 md:mt-16 w-full'>
      <span className='flex justify-start items-center gap-1 md:gap-2 mb-8'>
        <Pickaxe className='inline md:w-7 md:h-7 lg:w-8 lg:h-8' />
        <h2 className='text-xl md:text-3xl font-semibold inline'>Tech Stack</h2>
      </span>

      <div className='flex flex-wrap gap-4 justify-center items-center'>
        <StackIcon name="nodejs" className='w-12 md:w-16' />
        <StackIcon name="typescript" className='w-12 md:w-16' />
        <StackIcon name="postgresql" className='w-12 md:w-16' />
        <StackIcon name="mysql" className='w-12 md:w-16' />
        <StackIcon name="mongodb" className='w-12 md:w-16' />
        <StackIcon name="prisma" className='w-12 md:w-16' />
        <StackIcon name="nextjs2" className='w-12 md:w-16' />
        <StackIcon name="tailwindcss" className='w-12 md:w-16' />
        <StackIcon name="postman" className='w-12 md:w-16' />
        <StackIcon name="figma" className='w-12 md:w-16' />
        <StackIcon name="html5" className='w-12 md:w-16' />
        <StackIcon name="css3" className='w-12 md:w-16' />
        <StackIcon name="bootstrap5" className='w-12 md:w-16' />
        <StackIcon name="gcloud" className='w-12 md:w-16' />
        <StackIcon name="aws" className='w-12 md:w-16' />
        <StackIcon name="git" className='w-12 md:w-16' />
        <StackIcon name="github" className='w-12 md:w-16' />
        <StackIcon name="vscode" className='w-12 md:w-16' />
        <StackIcon name="reactquery" className='w-12 md:w-16' />
        <StackIcon name="vitejs" className='w-12 md:w-16' />
        <StackIcon name="zod" className='w-12 md:w-16' />
      </div>
    </motion.section>
  )
}

export default TechStack