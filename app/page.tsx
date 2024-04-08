"use client";
import React from "react";


import { Spotlight } from "@/components/ui/Spotlight";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";


export default function Home() {
  return (
    <main className="h-screen  " >
    
     
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 max-sm:mt-[250px]   w-full pt-20 md:pt-0">
      <Spotlight
        className="-top-40  max-sm:top-21 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h1 className="text-5xl mt-[200px] md:text-7xl font-bold text-center max-sm:text-xl mx-sm:tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-800 bg-opacity-50">
          WELCOME  TO WWWS<br />WORLD WIDE WEATHER SERVICE
        </h1>
      <Link href="(root)/page-one" className="flex ml-[530px] max-sm:ml-[130px] max-sm:mt-3">
          <button className="   bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-800  min-h-[46px] px-4 py-3 ">
          EXPLORE
          </button>
        </Link>
        <Meteors number={20} />
      </div>
   
    
   
    </main>
  )

}
