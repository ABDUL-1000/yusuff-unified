/* eslint-disable react/no-unescaped-entities */
import { Work_Sans } from 'next/font/google'
import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose the font weights you need
})

const page = () => {
  return (
    <div>
         <div className='w-full flex  items-center '>
         <h1
     className={`${workSans.className} text-[#ECECEC] text-[44px] font-semibold uppercase`}
   >
    Xtate
   </h1>
        
         <span className='text-white uppercase lg:text-[24px]'> - Xtatehub.com.</span>
         </div>
         <Image src="/xtateDetail.png" alt="payloow" width={300} height={300} className='w-[60%] h-[30%] mx-auto'  />
         <h1 className='text-[44px] mt-8 text-[#fff]'>Brief Overview</h1>
         <p className='text-white'>XtateHub is a comprehensive property management platform designed for Homeowners Associations HOA, landlords, and tenants. It simplifies housing operations by streamlining payment management, issue reporting, and administrative control — all in one mobile solution.</p>
         <p className='text-white'>The projects goal was to create an ecosystem where users can manage their finances, expand their knowledge, invest smartly, and enjoy easy purchasing, all with a single login and profile.</p>
         <h1 className='text-[44px] mt-8 text-[#fff]'>My Role</h1>
         <p className='text-white'>UI/UX Design (Mobile App + Super Admin Web UI)
Prototype Development (Figma)
Client Communication & Feature Refinement</p>
         <h1 className='text-[44px] mt-8 text-[#fff]'>Objectives</h1>
         <p className='text-white'>Build an intuitive platform where HOA admins can manage up to 500+ members independently.
Allow tenants and landlords to easily pay dues, report issues, and receive updates.
Empower the super admin to oversee multiple HOAs seamlessly.</p>
   <h1 className='text-[44px] mt-8 text-[#fff]'>Challenges</h1>
   <p className='text-white pb-4'>Managing complex payment structures (one-time fees, recurring dues, penalties).
Creating a fast issue-reporting experience that routes to the right HOA.
Ensuring easy onboarding for different user types (tenants, landlords, admins).</p>
   
   
   <h1 className='text-[44px] mt-8 text-[#fff] uppercase'>Solutions</h1>
   <p className='text-white pb-2'>Clear role-based navigation for each user type.
Simplified payment pages: Pay dues, view receipts, report payment issues — all in one flow.
Real-time issue tracking integrated inside dashboards.
Quick onboarding screens for tenants, landlords, and HOA admins.
Banners and reminders on the homepage to guide actions.
Exportable reports and QR verification system at community gates.</p>
   
   
   <h1 className='text-[44px] mt-8 text-[#fff] uppercase'>Results</h1>
   <p className='text-[#fff] pb-2'>A full mobile-first product ready for deployment.
Positive client feedback for clear, scalable design.
Open door for more project collaborations with the client.</p>
   
   <Footer/>
   </div>
  )
}

export default page
