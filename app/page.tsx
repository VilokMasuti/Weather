"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

import { cn } from "@/utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 " >
     
    
      <div className="max-w-2xl mx-auto p-4">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b max-sm:text-5xl from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Welcome to Wether service on the web.
        
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
      
        </p>
       
      </div>
      <BackgroundBeams />
   
    </main>
  )

}
