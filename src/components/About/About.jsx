
import React from 'react'
import { Hero } from '../Hero/hero'

export default function About() {
  return (
    <div className='grid place-items-center h-screen'>
    <div className='container md:w-[65%] mx-auto  '>
   
    <Hero className='text-white'>ABOUT COMPONENT</Hero>
    <div className='flex flex-wrap text-white py-4'>
      <p className='p-1 w-full sm:w-1/2' >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p className='p-1 w-full sm:w-1/2' >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

    </div>
    </div>
    </div>
  )
}
