'use client'

import { useInView, motion } from 'framer-motion'
import { Pickaxe } from 'lucide-react'
import React, { useRef } from 'react'
import StackIcon from 'tech-stack-icons'

const TechStack = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const title = "Tech Stack";
  const titleWords = title.split("");

  return (
    <section ref={ref} className='mt-8 md:mt-16 w-full'>
      <span className='flex justify-start items-center gap-1 md:gap-2 mb-8 w-fit'>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.1, ease: "easeIn" }}
        >
          <Pickaxe className='inline md:w-7 md:h-7 lg:w-8 lg:h-8' />
        </motion.span>
        <h2 className='text-xl md:text-3xl font-semibold inline'>
          {
            titleWords.map((tw, iTw) => (
              <motion.span
                key={iTw}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: iTw * 0.1, ease: "easeIn", delay: iTw * 0.05 }}
              >
                {tw}
              </motion.span>
            ))
          }
        </h2>
      </span>

      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center'>
        {[
          'nodejs', 'typescript', 'postgresql', 'mysql', 'mongodb', 'prisma',
          'nextjs2', 'tailwindcss', 'postman', 'figma', 'html5', 'css3',
          'bootstrap5', 'gcloud', 'aws', 'git', 'github', 'vscode', 'reactquery',
          'vitejs', 'zod'
        ].map((iconName, index) => (
          <motion.span
            key={iconName}
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(5px)" }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 30,
              delay: index * 0.02,
            }}
          >
            <StackIcon name={iconName} className='w-12 sm:w-16' />
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default TechStack
