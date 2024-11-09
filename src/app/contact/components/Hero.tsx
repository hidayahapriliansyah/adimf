'use client'

import React from 'react'

import { Contact } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const title = "Contact and Socials";
  const titleWords = title.split("");

  return (
    <section
      className='w-full flex mt-[63px] items-center gap-x-2'
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
      >
        <Contact className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12' />
      </motion.span>
      <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>
        {
          titleWords.map((tw, iTw) => (
            <motion.span
              key={iTw}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: iTw * 0.1, ease: "easeIn", delay: iTw * 0.05 }}
            >
              {tw}
            </motion.span>
          ))
        }
      </h1>
    </section>
  )
}

export default Hero