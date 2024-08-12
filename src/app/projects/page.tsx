import { Metadata } from 'next'
import React from 'react'

import Hero from './components/Hero'
import ProjectsList from './components/ProjectsList'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects | Adi Muhamad Firmansyah'
}

const ProjectsPage = () => {
  return (
    <>
      <Hero />
      <ProjectsList />
    </>
  )
}

export default ProjectsPage