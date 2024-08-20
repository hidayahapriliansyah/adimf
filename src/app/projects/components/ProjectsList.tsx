'use client'

import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import StackIcon from 'tech-stack-icons'
import { Button } from '../../../components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const ProjectsList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.9 }}
      className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'
    >

      <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>GIB Tasikmalaya</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/gib.png'}
              alt='GIB Tasikmalaya'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4'>Gerakan Infaq Tasikmalaya website that contains detail, contact, and more.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="typescript" className='w-6 sm:w-8' />
            <StackIcon name="nextjs2" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://gib-tasikmalaya.vercel.app/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/gib-tasikmalaya' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Open Music API</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/node.jpg'}
              alt='Open Music API'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4'>Open Music API with PostgreSQL, Redis, RabbitMQ and E2E testing with Jest.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="nodejs" className='w-6 sm:w-8' />
            <StackIcon name="redis" className='w-6 sm:w-8' />
            <StackIcon name="postgresql" className='w-6 sm:w-8' />
            <StackIcon name="jest" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-end w-full px-4'>
          <a href='https://github.com/hidayahapriliansyah/oper-music-api' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>AmaTrace</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/amatrace.png'}
              alt='Amatrace'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>My Bangkit Capstone project team is collaborating with Amati Indonesia to build a Traceability Platform for SMEs.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="typescript" className='w-6 sm:w-8' />
            <StackIcon name="nextjs2" className='w-6 sm:w-8' />
            <StackIcon name="postgresql" className='w-6 sm:w-8' />
            <StackIcon name="gcloud" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-end w-full px-4'>
          <a href='https://github.com/AMATI-TP-02' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Link Tree Clone</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/linktree-clone.png'}
              alt='Link Tree Clone'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>Simple Link Tree clone with Glassmorphism design using all vanilla code (HTML, CSS, JS).</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="html5" className='w-6 sm:w-8' />
            <StackIcon name="css3" className='w-6 sm:w-8' />
            <StackIcon name="js" className='w-6 sm:w-8' />
          </div>
        </div>

        <div className='flex justify-between w-full px-4'>
          <a href='https://linktree-clone-it-insight-day.vercel.app/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/linktree-clone' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Ngifent</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/contoh.png'}
              alt='Contoh Project'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>E-Ticket platform for managing community event.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="nodejs" className='w-6 sm:w-8' />
            <StackIcon name="typescript" className='w-6 sm:w-8' />
            <StackIcon name="nextjs2" className='w-6 sm:w-8' />
            <StackIcon name="postgresql" className='w-6 sm:w-8' />
            <StackIcon name="prisma" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://ngifent.com' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Realtime Chat with Pusher</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/realtime.png'}
              alt='Realtime Chat Pusher'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>Fulstack realtime chatting app with Pusher and OAuth.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="nextjs2" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://realtime-messanger-nextjs.vercel.app/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/realtime-messanger-nextjs' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Hoobank Landing Page</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/hoobank.png'}
              alt='Hoobank'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>Slicing Beautiful Hoobank Landing Page with React.js.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="vitejs" className='w-6 sm:w-8' />
            <StackIcon name="reactjs" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://bank-modern-app-pi-jet.vercel.app/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/bank-modern-app-prod' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Open AI Codex</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/codex.png'}
              alt='Codex'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>Chatting with Codex powered by Open API.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="openai" className='w-6 sm:w-8' />
            <StackIcon name="reactjs" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://hidayahapr-open-ai.vercel.app/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/open_ai_codex/tree/master' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Prakiraan Cuaca</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/prakiraan.jpeg'}
              alt='Prakiraan Cuaca'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>Weather forecasting using openweathermap.org</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="html5" className='w-6 sm:w-8' />
            <StackIcon name="css3" className='w-6 sm:w-8' />
            <StackIcon name="js" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://prakiraan-cuaca-fundamental-frontend.vercel.app/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/prakiraan-cuaca-fundamental-frontend' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Botram</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/botram.jpeg'}
              alt='Botram'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>Menjadi Front-End Web Developer Expert Dicoding submission. Using push notification, cache, and connect to API.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="html5" className='w-6 sm:w-8' />
            <StackIcon name="css3" className='w-6 sm:w-8' />
            <StackIcon name="js" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://botram-hidayah.vercel.app/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/restaurant-app-clean-code' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Bookshelf App</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/bookshelf.jpeg'}
              alt='Bookshelf app'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4 md:px-4'>Effortlessly manage your book collection with local storage and a sleek, user-friendly interface, all powered by vanilla JavaScript.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="html5" className='w-6 sm:w-8' />
            <StackIcon name="css3" className='w-6 sm:w-8' />
            <StackIcon name="js" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://submission-front-end-web-pemula-dicoding.vercel.app/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/bookshelf-apps' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-between items-start gap-2 md:gap-4 py-4 border border-input rounded-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <span className='text-lg md:text-2xl font-semibold pt-0 px-4'>Glassmorphism Portfolio</span>
          <div className='relative w-full aspect-video'>
            <Image
              src={'/projects/portfolio.jpeg'}
              alt='Amatrace'
              fill
              className='object-cover'
            />
          </div>
          <p className='md:text-xl px-4'>A personal web portfolio showcasing a sleek glassmorphism UI design.</p>
          <div className='flex gap-2 px-4 mb-4'>
            <StackIcon name="html5" className='w-6 sm:w-8' />
            <StackIcon name="css3" className='w-6 sm:w-8' />
            <StackIcon name="js" className='w-6 sm:w-8' />
          </div>
        </div>
        <div className='flex justify-between w-full px-4'>
          <a href='https://hidayahapriliansyah.github.io/' target='_blank'>
            <Button className='md:text-lg'>
              Live
              <ExternalLink className='ml-2' />
            </Button>
          </a>
          <a href='https://github.com/hidayahapriliansyah/hidayahapriliansyah.github.io' target='_blank' className='flex justify-center items-center text-zinc-950 dark:text-white'>
            <Github className='ml-2' />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectsList