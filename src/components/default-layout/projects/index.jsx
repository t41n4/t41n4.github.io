import { motion } from "framer-motion"
import React from 'react'
import { projectsContent } from '../../../constants'
import SmoothScroll from '../../smooth-scroll'
import { pageAnimation } from "../../transition-animation/TransitionAnimation"
import './index.scss'

const Projects = () => {

  return (
    <SmoothScroll>
      <motion.section
        initial={pageAnimation.initial}
        animate={pageAnimation.animate}
        transition={pageAnimation.transition}
        exit={pageAnimation.exit}
        className='project-page'>
        <div className="ctn">
          <h2 className="header">
            ■ Projects
          </h2>

          <div className='project-list' >
            {
              projectsContent.map((item) => (
                <a href={item.Reference} key={item.id} className='project-item'>
                  <div className='name text-[60px] '>
                    {item.Name}
                  </div>
                  <div className='description'>
                    {item.Year} / {item.Scope} / {item.Type}
                  </div>

                </a>
              ))
            }
          </div>
        </div>
      </motion.section>
    </SmoothScroll>



  )
}

export default Projects



