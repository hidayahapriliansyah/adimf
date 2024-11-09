'use client'

import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import StackIcon from 'tech-stack-icons'
import { Button } from '../../../components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'
    >
      {
        projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.35 * i }}
            className='h-full'
          >
            <ProjectCard
              {...project}
            />
          </motion.div>
        ))
      }

    </section>
  )
}

export default ProjectsList