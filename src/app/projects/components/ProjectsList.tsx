'use client'

import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import StackIcon from 'tech-stack-icons'
import { Button } from '../../../components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.9 }}
      className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'
    >

      {
        projects.map((project, i) => (
          <ProjectCard
            key={i}
            {...project}
          />
        ))
      }

    </motion.div>
  )
}

export default ProjectsList