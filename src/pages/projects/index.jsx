import { motion } from "framer-motion"
import React from 'react'
import { project } from '../../data'
// import SmoothScroll from '../../components/smooth-scroll'
// import { pageAnimation } from "../../components/transition-animation/TransitionAnimation"
import './index.scss'

const Projects = () => {

  return (
    // <SmoothScroll>
    <section
      // initial={pageAnimation.initial}
      // animate={pageAnimation.animate}
      // transition={pageAnimation.transition}
      // exit={pageAnimation.exit}
      className='project-page overflow-auto'>
      <div className="ctn">
        <h2 className="header">
          ■ Projects
        </h2>

        <div className='project-list' >
          {
            project.map((item) => (
              <a href={item.Reference} key={item.id} className='project-item'>
                <div className='name text-[60px] '>
                  {item.Name}
                </div>
                <div className='description'>
                  {item.Year} / {item.Role} / {item.Type}
                </div>
              </a>
            )).reverse()
          }
        </div>
      </div>
    </section>
    // </SmoothScroll>



  )
}

export default Projects



