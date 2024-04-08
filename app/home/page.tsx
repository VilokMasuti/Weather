"use client";
 

import { BackgroundBeams } from "../../components/ui/background-beams";
import Navbar from "../Navbar";
 


type Props = {}

const Home = (props: Props) => {
  return (
    <main className=" ">
  
        <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative  antialiased">
    <Navbar/>
      <BackgroundBeams />
    </div>




    </main>

 
    
  )
}

export default Home