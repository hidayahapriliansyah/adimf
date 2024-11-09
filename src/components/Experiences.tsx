'use client'

import { motion, useInView } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import React, { useRef } from 'react'

const Experiences = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const title = "Experiences";
  const titleWords = title.split("");

  return (
    <section ref={ref} className='mt-8 md:mt-16 w-full'>
      <span className='flex justify-start items-center gap-1 md:gap-2 mb-8'>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.1, ease: "easeIn" }}
        >
          <BriefcaseBusiness className='inline md:w-7 md:h-7 lg:w-8 lg:h-8' />
        </motion.span>
        <h2
          className='text-xl md:text-3xl font-semibold inline'
        >
          {
            titleWords.map((tw, iTw) => (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: iTw * 0.1, ease: "easeIn" }}
                key={iTw}
              >
                {tw}
              </motion.span>
            ))
          }
        </h2>
      </span>

      <div className='w-full'>
        {/* Experience 1 */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
        >
          <div className='ml-2 pl-8 pb-8'>
            <div className='absolute top-2 left-0 w-4 h-4 bg-input'></div>
            <div>
              <span className='block text-xl md:text-2xl mb-2'>Back-End Developer NestJS</span>
              <span className='block text-xl md:text-2xl mb-2'>DOT Indonesia | Intern | Remote, Malang, Indonesia</span>
              <span className='block md:text-2xl mb-2'>Aug 2024 - Present</span>
            </div>
          </div>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.85, ease: "easeInOut", delay: 0.65 }}
        >
          <div className='ml-2 pl-8 pb-8'>
            <div className='absolute top-2 left-0 w-4 h-4 bg-input'></div>
            <div>
              <span className='block text-xl md:text-2xl mb-2'>Founder & Developer</span>
              <span className='block text-xl md:text-2xl mb-2'>Ngifent Online Community E-Ticketing Platform | Tasikmalaya, Indonesia</span>
              <span className='block md:text-2xl mb-2'>Oct 2023 - Aug 2024</span>
              <p>I build Ngifent to empower communities in managing their event ticketing.</p>
            </div>
          </div>
        </motion.div>

        {/* Experience 3 */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.85, ease: "easeInOut", delay: 0.65 }}
        >
          <div className='ml-2 pl-8 pb-8'>
            <div className='absolute top-2 left-0 w-4 h-4 bg-input'></div>
            <div>
              <span className='block text-xl md:text-2xl mb-2'>Cloud Computing Cohort (Graduate with Distinction)</span>
              <span className='block text-xl md:text-2xl mb-2'>Bangkit Academy by Google, Goto, Traveloka | Tasikmalaya, Indonesia</span>
              <span className='block md:text-2xl mb-2'>Feb 2024 - Jul 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section >
  )
}

export default Experiences
