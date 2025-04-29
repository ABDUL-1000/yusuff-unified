'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects } from './data'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
 

  const itemLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const itemRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const [showAll, setShowAll] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    handleResize() // run initially
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const visibleProjects = showAll || isLargeScreen ? projects : projects.slice(0, 3)

  return (
    <div className='py-10'>
      <motion.h1
        className='text-[#535353] text-center lg:text-start font-[Work_Sans] text-[44px] not-italic font-medium leading-none'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {visibleProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className="bg-[#0C0C0C] rounded-2xl overflow-hidden shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            variants={i % 2 === 0 ? itemLeft : itemRight}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
            width={327}
            height={240}
              src={project.img}
              alt={project.title}
              className="w-full h-[240px] object-cover"
            />

            <div className="flex justify-between lg:justify-between flex-1 p-2 lg:p-2">
              <div>
                <h2 className="text-[#D5D7DA] font-[Manrope] text-[12px] not-italic font-semibold leading-none">
                  {project.title}
                </h2>
                <p className='text-[#757575] font-[Manrope] mt-1 text-[9px] not-italic font-medium leading-none'>
                  {project.des}
                </p>
              </div>

              <div className="flex justify-between items-center">
                {
                  project.link.startsWith('https://') ? (
                    <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0072FF] font-[Manrope] text-[10px] lg:text-[16px] not-italic font-medium leading-none underline"
                >
                  View Project
                </a>
                    
                  ):(
                    <Link
                    href={project.link}
          
                    rel="noopener noreferrer"
                    className="text-[#0072FF] font-[Manrope] text-[10px] lg:text-[16px] not-italic font-medium leading-none underline"
                  >
                 View Project
                  </Link>
                  )
                }
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show button only on small screens if not showing all */}
      {!showAll && !isLargeScreen && (
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(true)}
            className="text-[#0072FF] font-[Manrope] text-[16px] not-italic font-medium underline"
          >
            View More Projects
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default Project
