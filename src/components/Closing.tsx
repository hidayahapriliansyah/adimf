'use client'

import React, { useRef } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion, useInView } from 'framer-motion'
import Image from 'next/image';

const Closing = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section className='w-full'>
      <div className='mb-4'>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
          transition={{ duration: 0.9 }}
          className='text-3xl md:text-6xl font-semibold'
        >Planning a project?</motion.p>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className='text-3xl md:text-6xl  font-semibold'
        >Have a question to ask?</motion.p>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 50 }}
        transition={{ duration: 0.9, delay: 1.8 }}
        className='flex flex-col md:flex-row gap-2 md:gap-4 mt-8 w-full'
      >
        <Image
          src={'/profile.jpeg'}
          alt='Image profile'
          width={80}
          height={80}
          className='block rounded-full'
        />
        <div>
          <h2 className='text-xl'>Reach out to me via</h2>
          <a href='mailto:adimuhamadfirmansyah@gmail.com' className='flex justify-start items-center gap-1 text-xl'>
            <BiLogoGmail className='inline' />
            E-mail
          </a>
          <a href='https://www.linkedin.com/in/hidayahapriliansyah/' target='_blank' className='flex justify-start items-center gap-1 text-xl'>
            <FaLinkedin className='inline' />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Closing