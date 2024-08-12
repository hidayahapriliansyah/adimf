import { Metadata } from 'next'
import React from 'react'
import { BriefcaseBusiness } from 'lucide-react'
import Image from 'next/image'
import StackIcon from 'tech-stack-icons'
import { Button } from '../../components/ui/button'
import { ExternalLink } from 'lucide-react'
import { Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects | Adi Muhamad Firmansyah'
}

const ProjectsPage = () => {
  return (
    <>
      <div className='flex justify-start items-center md:items-center gap-2 md:gap-4 mt-16 w-full'>
        <BriefcaseBusiness className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12' />
        <h1 className='text-2xl md:text-5xl font-bold'>Projects</h1>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>

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
            <a href='#' target='_blank' className='flex justify-center items-center text-white'>
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
            <a href='https://github.com/hidayahapriliansyah/prakiraan-cuaca-fundamental-frontend' target='_blank' className='flex justify-center items-center text-white'>
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
            <a href='https://github.com/hidayahapriliansyah/restaurant-app-clean-code' target='_blank' className='flex justify-center items-center text-white'>
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
            <p className='md:text-xl px-4 md:px-4'>Mengelola daftar buku dengan local storage dengan tampilan yang User-friendly menggunakan vanilla Javascript.</p>
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
            <a href='https://github.com/hidayahapriliansyah/bookshelf-apps' target='_blank' className='flex justify-center items-center text-white'>
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
            <p className='md:text-xl px-4 md:px-4'>Capstone project team berkolaborasi denga Amati Indonesia dalam membangun Traceability Platform untuk UMKM</p>
            <div className='flex gap-2 px-4 mb-4'>
              <StackIcon name="typescript" className='w-6 sm:w-8' />
              <StackIcon name="nextjs2" className='w-6 sm:w-8' />
              <StackIcon name="postgresql" className='w-6 sm:w-8' />
              <StackIcon name="gcloud" className='w-6 sm:w-8' />
            </div>
          </div>
          <div className='flex justify-end w-full px-4'>
            <a href='https://github.com/AMATI-TP-02' target='_blank' className='flex justify-center items-center text-white'>
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
            <p className='md:text-xl px-4'>Personal web portofolio dengan tampilan UI glassmorphism</p>
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
            <a href='https://github.com/hidayahapriliansyah/hidayahapriliansyah.github.io' target='_blank' className='flex justify-center items-center text-white'>
              <Github className='ml-2' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage