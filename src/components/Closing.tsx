'use client'

import React, { useEffect, useRef } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion, useInView, } from 'framer-motion'
import Image from 'next/image';

const Closing = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const planningText = 'Planning a project?';
  const planningWords = planningText.split(' ');
  const questionText = 'Have a question to ask?';
  const questionWords = questionText.split(' ');

  return (
    <section
      ref={ref}
      className='w-full'
    >
      <div className='mb-4'>
        <p className='text-3xl md:text-6xl font-semibold'>
          {
            planningWords.map((pw, iPw) => (
              <motion.span
                key={iPw}
                initial={{ opacity: 0, x: 0, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 20 }}
                transition={{ duration: 0.5, delay: iPw * 0.3 + 0.3, ease: 'easeInOut' }}
              >
                {pw}&nbsp;
              </motion.span>
            ))
          }
        </p>
        <p className='text-3xl md:text-6xl  font-semibold'>
          {
            questionWords.map((qw, iQw) => (
              <motion.span
                key={iQw}
                initial={{ opacity: 0, x: 0, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 20 }}
                transition={{ duration: 0.5, delay: iQw * 0.3 + 1, ease: 'easeInOut' }}
              >
                {qw}&nbsp;
              </motion.span>
            ))
          }
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(5px)' }}
        animate={
          inView
            ? { opacity: 1, filter: 'blur(0px)' }
            : { opacity: 0, filter: 'blur(5px)' }
        }
        transition={{ duration: 0.5, delay: 3 }}
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