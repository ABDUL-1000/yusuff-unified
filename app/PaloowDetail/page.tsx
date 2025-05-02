/* eslint-disable react/no-unescaped-entities */
import { Work_Sans } from 'next/font/google'
import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose the font weights you need
})

const PaloowDetail = () => {
  

  return (
    <div>
      <div className='w-full flex  items-center '>
      <h1
  className={`${workSans.className} text-[#ECECEC] text-[44px] font-semibold uppercase`}
>
  Payloow
</h1>
     
      <span className='text-white uppercase lg:text-[24px]'> - Smart Living, Simplified.</span>
      </div>
      <Image src="/paylooww1.png" alt="payloow" width={300} height={300} className='w-[60%] h-[30%] mx-auto'  />
      <h1 className='text-[44px] mt-8 text-[#fff]'>Brief Overview</h1>
      <p className='text-white'>Payloow is an innovative multi-service platform that brings together essential daily services—Bills payment, Easybuy shopping, E-learning, and Investments—into a single seamless experience, accessible via both mobile and web apps.</p>
      <p className='text-white'>The projects goal was to create an ecosystem where users can manage their finances, expand their knowledge, invest smartly, and enjoy easy purchasing, all with a single login and profile.</p>
      <h1 className='text-[44px] mt-8 text-[#fff]'>Problem Statement</h1>
      <p className='text-white'>Todays users are overwhelmed by fragmented apps that each serve one need—Payloow solves this by offering a unified, simple, and smarter ecosystem where everything can be done under one roof without repetitive setups.</p>
      <h1 className='text-[44px] mt-8 text-[#fff]'>Objectives</h1>
      <p className='text-white'>Build a multi-module app Bills, Easybuy, E-learning, Investment accessible via one profile.
Offer both user and admin interfaces.
Provide a reseller system with benefits like discounted rates.
Enable smooth onboarding and profile setup.
Create efficient and intuitive admin dashboards for managing all modules.</p>
<h1 className='text-[44px] mt-8 text-[#fff]'>Research & Understanding</h1>
<p className='text-white pb-4'>1. Google Form Survey
I designed and shared a Google Form survey targeting potential users from diverse backgrounds. The survey focused on understanding:
How users currently manage their daily services like bills, shopping, learning, investment.
Their frustrations with using multiple apps.
Their expectations from an all-in-one platform.
Features that would motivate them to switch to a single ecosystem.
Key Insights from the Survey:
90% of users preferred a one-time profile setup over filling out information multiple times.
45% found it annoying to switch between different apps for different needs.
80% were interested in getting discounted rates through reseller opportunities.</p>
<Image src="/payloowdetail1.jpg" alt="payloow" width={300} height={300} className='w-[60%] h-[30%] mx-auto'  />
<p className='text-white pt-2 pb-2'>2. User Interviews
I also conducted casual but insightful interviews with some co-workers who fit our target audience. The interviews helped uncover:
Real pain points around inconsistent user experiences across apps.
Concerns about security and ease of payments.
Positive reception towards having a unified learning and investment platform.
Key Insights from Interviews:
Users want a platform they can trust with both personal and financial information.</p>
<h1 className='text-[44px] mt-8 text-[#fff]'>User persona & Flow</h1>
<p className='text-white pb-2'>This section presents the ideal users for Payloow, capturing their backgrounds, goals, frustrations, and behavior patterns. By understanding their needs and motivations, we ensure the product is designed to solve real problems and deliver a smooth, rewarding experience.
My User Flow section outlines the journey a typical user takes when interacting with Payloow — from account registration, profile setup, and navigating between the mini-apps like Bills, EasyBuy, E-learning, Investment, to completing specific tasks like purchasing, investing, or learning. This flow helps structure the app and ensure its design to feel intuitive and minimize user effort.</p>

<Image src="/payloowdetail2.jpg" alt="payloow" width={300} height={300} className='w-[60%] h-[30%] mx-auto'  />
<h1 className='text-[44px] mt-8 text-[#fff]'>Ui Designs</h1>
<p className='text-[#fff] pb-2'>A clean, friendly, and futuristic look.
Emphasized important CTAs and data clarity.
Used a consistent visual language across mobile and web.</p>
<h1 className='text-[44px] mt-8 text-[#fff]'>Challenges</h1>
<p className='text-[#fff] pb-2'>Designing a flexible system to accommodate four completely different modules.
Making the reseller setup simple yet powerful.
Creating one-time onboarding that still fits multiple mini-apps without frustration.</p>
<h1 className='text-[44px] mt-8 text-[#fff]'>SOlutions</h1>
<p className='text-[#fff] pb-2'>Introduced a single universal profile across all modules.
Added tab navigation for easy module switching on the admin side.</p>
<h1 className='text-[44px] mt-8 text-[#fff]'>Impact</h1>
<p className='text-[#fff] pb-2'>Smoother onboarding for users.
Resellers can now save money easily and promote their organizations. Admin has complete visibility and can manage all operations without complexity.</p>
<h1 className='text-[44px] mt-8 text-[#fff]'>Final Thoughts</h1>
<p className='text-[#fff] pb-2'>This project challenged me to think beyond just app design.  It was about building a full ecosystem that feels natural and effortless for different types of users. Payloow shows how smart design can simplify life — one click, one login, endless possibilities.</p>
<Footer/>
</div>
  )
};

export default PaloowDetail;
