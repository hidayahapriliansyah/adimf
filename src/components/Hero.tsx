'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { Button } from './ui/button'
import { Send, FileText } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const description = "A full-stack developer focused on building scalable back-end solutions and crafting seamless user experiences.";
  const descWords = description.split(" ");
  const name = "Adi Muhamad Firmansyah";
  const nameWords = name.split("");

  return (
    <section
      ref={ref}
      className='w-full pt-16 flex flex-col justify-center'
    >
      <h1
        className='text-2xl md:text-5xl mb-2 md:mb-4 font-bold'
      >
        {nameWords.map((nameWord, iName) => (
          <motion.span
            key={iName}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: iName * 0.1, ease: "easeIn" }}
          >{nameWord}</motion.span>
        ))}
      </h1>

      <p className='text-3xl md:text-6xl lg:text-7xl'>
        {descWords.map((desc, iDesc) => (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: (iDesc * 0.1) + 0.85, ease: "easeInOut" }}
            key={iDesc}
            className="inline-block"
          >
            {desc}&nbsp;
          </motion.span>
        ))}
      </p>

      <p className='mt-2 lg:mt-8 md:mt-4 text-xl md:text-2xl'>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2.9, duration: 0.75, ease: "easeInOut" }}
        >
          Over 1 year of experience in full-stack development using Node.js.
        </motion.span>
      </p>

      <div className='flex flex-wrap gap-2 mt-4 md:mt-8'>
        <motion.a
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(5px)" }}
          transition={{ delay: 3.5, duration: 0.85, ease: "easeInOut" }}
          href="mailto:adimuhamadfirmansyah@gmail.com"
          className='w-full sm:w-auto'
        >
          <Button
            size='lg'
            className='md:text-xl md:py-8 w-full sm:w-auto'
          >
            Get in touch
            <Send className='ml-1 md:ml-2 h-4 md:h-8 mr-0' />
          </Button>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(5px)" }}
          transition={{ delay: 4, duration: 0.85, ease: "easeInOut" }}
          href="https://drive.google.com/file/d/1Cd6JTq5BGDiyLbf5sc2UzDY2tKEook9D/view?usp=sharing" target='_blank'
          className='w-full sm:w-auto'
        >
          <Button
            variant='outline'
            size='lg'
            className='md:text-xl md:py-8 w-full sm:w-auto'
          >
            Download CV
            <FileText className='ml-1 md:ml-2 h-4 md:h-8' />
          </Button>
        </motion.a>
      </div>
    </section >
  )
}

export default Hero
