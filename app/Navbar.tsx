"use client"

import Image from 'next/image';
import React from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
type Props = {}

const Navbar = (props: Props) => {
  return (
      <nav className="sticky top-0 left-0 z-50  bg-transparent shadow-md">
      <div className="h-[80px]     w-full    flex   justify-between items-center  max-w-7xl px-3 mx-auto">
        
        <h1 className="flex items-center justify-center gap-2  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950  text-center font-sans font-bold lg:text-5xl sm:text-xl ">
     WEATHER
     <div className=' mt-2 ml-[-10px]'>
      <Image
      src='/assests/w.png'
      alt=''
      width={50}
      height={50}
      />

   
     </div>
     </h1>

     
        <section className="flex gap-2 items-center">
         <div>
         
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Navbar