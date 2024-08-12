import React from 'react'
import Hero from './components/Hero'
import Contacts from './components/Contacts'

const page = () => {
  return (
    <section className='w-full'>
      <Hero />
      <Contacts />
    </section>
  )
}

export default page