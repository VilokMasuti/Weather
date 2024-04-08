"use client"

import Image from 'next/image';

import { ChangeEventHandler, FormEventHandler } from 'react';
type Props = {
      type:string
   onChange?: ChangeEventHandler<HTMLInputElement> | undefined
onSubmit?: FormEventHandler<HTMLFormElement> | undefined

}

const Searchbox = (props: Props) => {
  return (
    <form onSubmit={props.onSubmit} className=' flex relative items-center justify-center h-10'>
      <input
      type='text'
      value={props.type}
      placeholder='Location'
      className= '   text-gradient-to-b from-neutral-50 to-neutral-950  max-sm:hidden  bg-transparent border-b-2 outline-none  '
onChange={() => {props.onChange}}
      />
<button type='submit' className=' cursor-pointer ml-[-10px]'>
<Image
      src='/assests/s.svg'
      alt=''
      width={50}
      height={50}
      className="  cursor-pointer max-sm:hidden  "
      />
</button>


    </form>
  )
}

export default Searchbox