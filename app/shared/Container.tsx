
import { cn } from "@/utils/cn";
import React from "react";

type Props = {}

export const Container = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div   
    {...props}
className={cn(   "w-full bg-black border rounded-xl flex py-4 shadow-sm", props.className)}    

    />

   
      
    
  )
}

