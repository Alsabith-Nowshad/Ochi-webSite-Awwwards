"use client"

import React from 'react'
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full mt-44  bg-[#004D43] flex flex-col justify-center items-center rounded-tl-[20px] rounded-tr-[20px] h-[30vh] md:h-[43vh]'>
      <div className="text border-t-2 border-b-2 w-[100vw] border-zinc-100 flex overflow-hidden whitespace-nowrap gap-10">
        <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear",  duration: 5 }} className='text-[190px] md:text-[320px] leading-none font-bold uppercase'>
          we are ochi
        </motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear",  duration: 5 }} className='text-[190px] md:text-[320px] leading-none font-bold uppercase'>
          we are ochi
        </motion.h1>
        
      </div>
    </div>
  )
}  

export default Marquee

