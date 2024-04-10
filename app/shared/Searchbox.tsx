
import Image from 'next/image';
import { cn } from "@/utils/cn";
import React from "react";

type Props = {
      className?: string;
      value: string;
      onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
      onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;

}

const Searchbox = (props: Props) => {
  return (
    <form 
    onSubmit={props.onSubmit} className={cn(
      "flex relative items-center justify-center h-10",
      props.className
    )}
  ><input
  type='text'
  value={props.value}
  onChange={props.onChange} // Correctly pass the onChange function
  placeholder='Location..'
  className= 'text-gradient-to-b from-neutral-50 text-white to-neutral-950 bg-transparent border-b-2 outline-none'
/>
<button type='submit' className=' cursor-pointer ml-[-10px]'>
<Image
      src='/assests/s.svg'
      alt=''
      width={50}
      height={50}
      className="  cursor-pointer  "
      />
</button>


    </form>
  )
}

export default Searchbox