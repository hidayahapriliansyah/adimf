'use client'

import { useInView, motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import React, { useRef } from 'react'

const Experiences = () => {
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
        <BriefcaseBusiness className='inline md:w-7 md:h-7 lg:w-8 lg:h-8' />
        <h2 className='text-xl md:text-3xl font-semibold inline'>Experiences</h2>
      </span>

      <div className='w-full'>

        <div className='relative'>
          <div className='ml-2 pl-8 pb-8'>
            <div className='absolute top-2 left-0 w-4 h-4 bg-input'></div>
            <div >
              <span className='block text-xl md:text-2xl mb-2'>Back-End Developer NestJS</span>
              <span className='block text-xl md:text-2xl mb-2'>DOT Indonesia | Intern | Remote | Tasikmalaya, Indonesia</span>
              <span className='block -xl md:text-2xl mb-2'>Aug 2024 - Present</span>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='ml-2 pl-8 pb-8'>
            <div className='absolute top-2 left-0 w-4 h-4 bg-input'></div>
            <div >
              <span className='block text-xl md:text-2xl mb-2'>Founder & Developer</span>
              <span className='block text-xl md:text-2xl mb-2'>Ngifent Online Community E-Ticketing Platform | Tasikmalaya, Indonesia</span>
              <span className='block -xl md:text-2xl mb-2'>Oct 2023 - Aug 2024</span>
              <p>I build Ngifent to empower communities in managing their event ticketing.</p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='ml-2 pl-8 pb-8'>
            <div className='absolute top-2 left-0 w-4 h-4 bg-input'></div>
            <div>
              <span className='block text-xl md:text-2xl mb-2'>Cloud Computing Cohort (Graduate with Distinction)</span>
              <span className='block text-xl md:text-2xl mb-2'>Bangkit Academy by Google, Goto, Traveloka  | Tasikmalaya, Indonesia</span>
              <span className='block -xl md:text-2xl mb-2'>Feb 2024 - Jul 2024</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experiences