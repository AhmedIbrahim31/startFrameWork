import React from 'react'
import img from '../../assets/avataaars.svg'
import { Hero } from '../Hero/hero'
export default function Home() {
  return (
    <div className='grid place-items-center min-h-dvh'>
      <div className="hero-img ">
     <img src={img} alt="hero" className='w-[250px] mx-auto mb-6' />
   <Hero className='text-white'>START FRAMEWORK</Hero>
   <p className='text-white text-center my-4 '>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      </div> 
  )
}

