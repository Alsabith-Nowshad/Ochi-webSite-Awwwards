"use client"
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion'; // Import motion from framer-motion

const LandingPage = () => {

motion



  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=' landing-page w-full h-auto bg-zinc-900 overflow-hidden  pt-2'>
      <div className='textstructure mt-52 px-[5vw]'>
        {["WE CREATE","EYE OPENING","PRESENTATIONS"].map((items,index)=>(
            <div className="masker">
                <div className='w-fit flex items-center'>
                    {index ===1 && (<motion.div initial={{width: 0}} animate={{width:100 }} transition={{ease:[0.76,0,0.24,1],duration: 1}} className='w-[50px] h-[40px] mr-2 md:w-[100px] md:mr-5 md:h-[60px] lg:w-[120px] lg:h-[80px]  bg-red-500 rounded-[5px]'></motion.div>)}
            <h1 className=' font-extrabold text-[35px] leading-[45px]  md:text-[65px] md:leading-[70px] lg:text-[100px] lg:leading-[100px]' key={index}>{items}</h1>
            </div>
            </div>
        ))}

      </div>

      <div className='border-t-[1px] border-zinc-800  mt-32 lg:flex  lg:justify-between lg:items-center py-5 px-[5vw]'>
        {["For Public and  Private Companies", "From the First Pitch to IPO"].map((items,index) => (
            <p key={index} className='text-[15px] py-4 md:text-[13px] lg:text-[15px] leading-none'>{items}</p>
        ))}
        <div className="start flex items-center gap-5 text-[15px] md:text-[10px] lg:text-[15px]">
            <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full text-md uppercase'>Start The Project</div>
            <div className='w-8 h-8 lg:w-10 lg:h-10 border-[1px] flex items-center justify-center border-zinc-400 rounded-full'>
                <GoArrowUpRight />
                </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

