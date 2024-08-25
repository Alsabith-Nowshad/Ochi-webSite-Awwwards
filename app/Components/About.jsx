"use  client"
import React, { useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

const About = () => {


    const [hover,sethover] = useState(false)

    let enter = () =>{
      
      sethover(true)

    }

    let leave = () =>{
      
      sethover(false)

    }




  return (
    <div className="overflow-hidden py-20 bg-[#CDEA68] rounded-tl-[20px] rounded-tr-[20px] text-[#000] px-[5vh] leading-[50px]">
      <h1 className="text-[30px] md:text-[50px]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full lg:flex gap-5 border-t-[1px] mt-20 border-[#71b563]">
        <div className="w-1/2">
          <h1 className="text-[20px] 2xl:text-[70px] pt-10">Our apporoch:</h1>
          <button onMouseEnter={enter} onMouseLeave={leave} className="btn w-[238px] h-[80px] bg-zinc-900 rounded-full uppercase px-10 py-2 text-[15px]  mt-10 text-white flex gap-8 items-center">
            Read More
            <div className={`bg-zinc-100 rounded-full transition-all duration-300 ease-in-out  text-black flex justify-center items-center ${hover ? 'w-10 h-10 text-[23px]' : 'w-2 h-2 text-transparent'} `}>
            <  GoArrowUpRight />
            </div>
          </button>
        </div>
        <div className="w-[70vw] h-[45vw] lg:w-[870px] lg:h-[630px] mt-10 rounded-[15px] bg-[#afc950]">
          <img
            className="w-[70vw] h-[45vw] lg:w-[870px] lg:h-[630px]  rounded-[15px]"
            src="./About.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
