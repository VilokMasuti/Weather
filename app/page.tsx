"use client";
import React from "react";


import { Spotlight } from "@/components/ui/Spotlight";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <main className= 'h-auto md:h-[40rem] w-full rounded-md flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0 flex relative' >
    
     
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 max-sm:mt-[250px]   w-full pt-20 md:pt-0">
      <Spotlight
        className="-top-40  max-sm:top-21 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <motion.h1
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 5, delay: 6}}
            className=" max-sm:mt-[-150px] lg:text-8xl outfit tracking-widest max-sm:text-[27px] max-sm:tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200  to-neutral-600  max-sm:ml-[20px]  "
          >
          WELCOME  TO WWWS
          
        </motion.h1>
        <motion.p
        
        initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 5, delay: 7}}
        className=" text-4xl ml-[330px] mt-9 max-sm:text-sm  max-sm:ml-[60px] max-sm:mt-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200  to-neutral-600">
          WORLD WIDE WEATHER SERVICE
          </motion.p>
      <Link href="/home" className="flex ml-[550px] max-sm:ml-[130px] max-sm:mt-3 mt-10">
          <button className="    bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600  min-h-[46px] px-4 py-3 ">
          EXPLORE
          </button>
        </Link>
        <Meteors number={20} />
      </div>
       
   
    </main>
  )

}
