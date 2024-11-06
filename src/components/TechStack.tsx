'use client'

import { useInView, motion } from 'framer-motion'
import { Pickaxe } from 'lucide-react'
import React from 'react'
import StackIcon from 'tech-stack-icons'

const TechStack = () => {
  return (
    <section className='mt-8 md:mt-16 w-full'>
      <motion.span
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 30, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 30,
          delay: 0.3,
        }}
        className='flex justify-start items-center gap-1 md:gap-2 mb-8'
      >
        <Pickaxe className='inline md:w-7 md:h-7 lg:w-8 lg:h-8' />
        <h2 className='text-xl md:text-3xl font-semibold inline'>Tech Stack</h2>
      </motion.span>

      <div className='flex flex-wrap gap-4 justify-center items-center'>
        {[
          'nodejs', 'typescript', 'postgresql', 'mysql', 'mongodb', 'prisma',
          'nextjs2', 'tailwindcss', 'postman', 'figma', 'html5', 'css3',
          'bootstrap5', 'gcloud', 'aws', 'git', 'github', 'vscode', 'reactquery',
          'vitejs', 'zod'
        ].map((iconName, index) => (
          <motion.span
            key={iconName}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 30,
              delay: index * 0.075, // Stagger the animation for each icon
            }}
          >
            <StackIcon name={iconName} className='w-12 md:w-16' />
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default TechStack
