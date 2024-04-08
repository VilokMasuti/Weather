"use client"

import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import Searchbox from './Searchbox';

type Props = {}

const Navbar = (props: Props) => {
  
  return (
      <nav className="sticky top-0 left-0 z-50   bg-transparent shadow-md">
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

     
        <section className=" items-center flex gap-5 max-sm:gap-7 ">
          
        <Image
      src='/assests/s.png'
      alt=''
      width={50}
      height={50}
      className=" mr-[] cursor-pointer  max-sm:h-[44px] max-sm:w-[45px]"
      />
         <Image
      src='/assests/l.png'
      alt=''
      width={55}
      height={50}
      className="  cursor-pointer max-sm:h-[44px] max-sm:w-[45px "
      />
      
        
      <p className='  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950  text-center font-sans font-bold  text-xl'>India</p>
      <div className="relative hidden md:flex">
           <Searchbox type={''}/>

           
               
             
            
            </div>
        </section>
      </div>
    </nav>
  )
}

export default Navbar
