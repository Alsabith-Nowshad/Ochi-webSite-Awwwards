"use client"
import React, { useEffect, useState } from 'react'


const Eyes = () => {
  const [rotate, setRotate] = useState(0)

useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
     let mouseX =   e.clientX 
    let mouseY = e.clientY

    let deltaX = mouseX - window.innerWidth/2
    let deltaY = mouseY - window.innerHeight/2

    var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
        setRotate(angle-180)
    })
})



  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className="relative w-[100vw] h-[100vh] sm:w-full sm:h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]">
      <div className="absolute  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-10 ">
      <div className="w-[150px]  h-[150px] sm:w-[250px]  sm:h-[250px] rounded-full bg-zinc-100 flex items-center justify-center">
                <div className='relative w-[100px] h-[100px]  sm:w-[200px] sm:h-[200px] rounded-full bg-zinc-900 flex items-center justify-center'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line  w-full h-10 ">
                     <div className='w-[40px] h-[40px] rounded-full bg-zinc-100'></div>
                     </div>
                </div>
      </div>
      <div className="w-[150px]  h-[150px] sm:w-[250px]  sm:h-[250px] rounded-full bg-zinc-100 flex items-center justify-center">
      <div className='relative w-[100px] h-[100px]  sm:w-[200px] sm:h-[200px] rounded-full bg-zinc-900 flex items-center justify-center'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line   w-full h-10 ">
                     <div className='w-[40px] h-[40px] rounded-full bg-zinc-100'></div>
                     </div>
                </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Eyes
