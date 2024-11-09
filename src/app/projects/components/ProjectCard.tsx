import React from 'react'
import type { Project } from '../../data/projects'
import Image from 'next/image'
import StackIcon from 'tech-stack-icons'
import { Button } from '../../../components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = (project: Project) => {
  return (
    <div className='h-full flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
      <div className='flex flex-col gap-4 w-full'>
        <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>{project.title}</span>
        <div className='relative w-full aspect-video'>
          <Image
            src={`/projects/${project.image}`}
            alt={project.title}
            fill
            className='object-cover'
          />
        </div>
        <p className='md:text-xl px-4'>{project.description}</p>
        <div className='flex gap-2 px-4 mb-4'>
          {
            project.stack.map((stack, i) => (
              <StackIcon key={i} name={stack} className='w-6 sm:w-8' />
            ))
          }
        </div>
      </div>
      <div className='flex justify-between w-full px-4'>
        <div className='w-fit h-fit'>
          {
            project.liveUrl &&
            <a href={project.liveUrl} target='_blank'>
              <Button className='md:text-lg'>
                Live
                <ExternalLink className='ml-2' />
              </Button>
            </a>
          }
        </div>
        <div className='w-fit h-fit'>
          {
            project.github &&
            <a href={project.github} target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
              <Github className='ml-2' />
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard