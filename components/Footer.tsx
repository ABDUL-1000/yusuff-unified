import { Button } from './ui/button'
import React from 'react'
import { CiMail } from "react-icons/ci";



const Footer = () => {
  return (
    <div>
       <div className="py-10 flex flex-col items-center" id='contact'>
      <h1
        className="text-[#ECECEC] lg:text-center font-[Work_Sans] text-[44px] lg:text-[75px] font-medium"
       
      >
        Ready to Create Together? 
      </h1>
      <div className='lg:w-[55%] mx-auto'>
      <p
        className='text-[#CACACA] font-[Work_Sans] text-[14px] leading-normal text-center lg:text-[16px] font-medium'
       
      >
        If you’ve got a project, idea, or just wanna vibe about Tech/design, I’m always down to chat. Let’s make it real together.
      </p>
      </div>
      <Button className="flex items-center w-[99%] lg:w-[30%] lg:px-2 hover:bg-blue-500 bg-[#0072FF] rounded-lg mt-5">
       <span><CiMail className='w-2 h-2 lg:w-4 lg:h-4 text-white'/></span> <span className='text-white lg:text-[16px] text-[10px]'>yusufababah50@gmail.com</span>
      </Button>
      
      <div
        className='flex mt-4 gap-1 lg:hidden md:hidden'
        
      >
        <img src="/Frame 30 (5).png" alt="twitter" className='w-6 h-6'/>
        <img src="/Frame 50.png" alt="linkedin" className='w-6 h-6' />
        <img src="/Frame 49.png" alt="Gituhub" className='w-6 h-6'/>
      </div>
      </div>
      <div className='flex justify-between items-center'>
      <div>
        <p className='text-[9px] lg:text-[16px]'>© Yusuf 2025</p>
      </div>
      <div
        className='lg:flex gap-2 hidden md:inline'
       
      >
        <img src="/Frame 30 (5).png" alt="twitter" className='w-6 h-6'/>
        <img src="/Frame 50.png" alt="linkedin" className='w-6 h-6' />
        <img src="/Frame 49.png" alt="Gituhub" className='w-6 h-6'/>
      </div>
      <div>
      
        <p className='text-[6px] lg:text-[8px]'>Built by Yusuf &  <a href="https://abdullateeftsx.vercel.app/" target='_blank'> <span className='hover:cursor-pointer hover:text-[#0072FF] '> Abdullatif Abdulkarim. </span> </a> </p>
      
      </div>
      </div>
    </div>
  )
}

export default Footer;
