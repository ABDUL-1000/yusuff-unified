/* eslint-disable react/no-unescaped-entities */

import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <h1 className='text-[Work Sans] text-[44px] italic uppercase text-white '>
        Whos Behind the Work?
      </h1>
      <p className='text-[8px] lg:text-[16px] py-2 text-start text-white '>
        {/* Hey, Im Yusuf — a UI/UX designer whos all about clean interfaces and meaningful experiences. I don't just design screens, I shape how people feel when they interact with a product. Whether it's a mobile app or a full-on web experience, my goal is always simple: make it work beautifully and leave the client and users smiling. */}
      </p>
      <p className='text-[8px] lg:text-[16px] py-2 text-start text-white'>
        {/* Over the years, I've worked on projects like Payloow, Arewaflix, and XtateHub — each one different, but all of them built with intention and passion. It's not just about visuals for me, it's about solving problems with design that actually feels good to use. Every happy client and user is proof that thoughtful design matters. */}
      </p>
      <p className='text-[8px] lg:text-[16px] py-2 text-start text-white'>
        When Im not deep in Figma pushing pixels, youll probably find me doing something quiet. I love strolling, no destination needed — just walking and thinking. I read the Quran to keep my heart grounded, and  I enjoy listening to podcasts or watching documentaries that open up my mind. Im also that guy who scrolls through Pinterest — just to collect vibes and aesthetics. Weirdly satisfying.
      </p>
      <p className='text-[8px] lg:text-[16px] py-2 text-start text-white'>
        I believe good design speaks, but great design connects. If youre looking for someone who mixes detail with vibe, systems with soul — we might just make something special together.
      </p>
      <Footer/>
    </div>
  )
}

export default page
