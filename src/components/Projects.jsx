import React, { useEffect, useRef, useState } from 'react'
import { projectsContent } from '../constants'
import SmoothScroll from './SmoothScroll/SmoothScroll'
import { motion } from "framer-motion"
import { pageAnimation } from "./TransitionAnimation/TransitionAnimation"


const Projects = () => {

  return (
    <SmoothScroll>
      <motion.section
        initial={pageAnimation.initial}
        animate={pageAnimation.animate}
        transition={pageAnimation.transition}
        exit={pageAnimation.exit}
        className='page block opacity-[1]'>
        <div className="page_content project text-right px-[56px] py-[181px]">
          <div className="page_section">

            <h2 className="project_heading">
              ■ Projects
            </h2>

            <div className='project_list flex items-end flex-col gap-y-[15px] mt-[50px]  ' >
              {
                projectsContent.map((item) => (
                  <a href={item.Reference} key={item.id} className='project_item flex flex-col md:flex-row-reverse md:items-baseline gap-x-2 font-thin '>
                    <div className='project_name text-[60px] '>
                      {item.Name}
                    </div>
                    <div className='project_info text-[14] mt-1 '>
                      {item.Year} / {item.Scope} / {item.Type}
                    </div>

                  </a>
                ))
              }
            </div>

          </div>
        </div>
      </motion.section>
    </SmoothScroll>



  )
}

export default Projects



