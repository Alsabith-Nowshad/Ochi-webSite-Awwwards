
import React, { useEffect } from 'react'

const About = () => {

  return (
    <div className='overflow-hidden py-20 bg-[#CDEA68] rounded-tl-[20px] rounded-tr-[20px] text-[#000] px-[5vh] leading-[50px]'>
      <h1 className='text-[30px] md:text-[50px]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full lg:flex gap-5 border-t-[1px] mt-20 border-[#71b563]">
        <div className='w-1/2'>
        <h1 className='text-[20px] 2xl:text-[70px] pt-10'>Our apporoch:</h1>
        <button className=' bg-zinc-900 rounded-full uppercase text-[8px] px-10 py-2 md:text-[15px] md:py-2 md:px-8  mt-10 text-white flex gap-2  items-center sm:px-14 sm:py-4 sm:gap-10'>Read More
            <div className='w-1 h-1 md:w-2 md:h-2 bg-zinc-100 rounded-full '></div>
        </button>
        </div>
        <div className="w-[70vw] h-[45vw] lg:w-[870px] lg:h-[630px] mt-10 rounded-[15px] bg-[#afc950]">
        <img className='w-[70vw] h-[45vw] lg:w-[870px] lg:h-[630px]  rounded-[15px]' src="./About.jpg" alt="" /></div>
        </div>
    </div>
   
  )
}

export default About
