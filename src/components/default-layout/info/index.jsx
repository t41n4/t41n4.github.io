import React from 'react'
import { awards, info, socials, technologyStacks } from '../../../constants'
import { motion, AnimatePresence } from "framer-motion"
import { pageAnimation } from "../../transition-animation/TransitionAnimation"


function Info() {
  return (
    <motion.div
      initial={pageAnimation.initial}
      animate={pageAnimation.animate}
      transition={pageAnimation.transition}
      exit={pageAnimation.exit}
      className='page_content info absolute bottom-14 left-14 whitespace-nowrap flex flex-col gap-10 text-[14px]'
    >

      <div className='info_item info_socials'>
        {
          socials.map(
            (item) =>
            (
              <div key={item.id} >
                <a className='  dark:hover:text-[#535bf2]' href={item.link} >
                  {item.name}
                </a>
              </div>
            ))
        }
      </div>

      <div className='info_item info_awards'>
        {
          awards.map(
            (item) =>
            (
              <div key={item.id}  >
                <p>
                  {item.title}
                </p>
                <a href={item.link} className=' dark:hover:text-[#535bf2]'>
                  {item.name}
                </a>
              </div>
            ))
        }
      </div>

      <div className='info_item info_info xl:fixed xl:right-14 xl:top-14 xl:text-right'>
        {
          info.map(
            (item) =>
            (
              <div key={item.id} className=''>
                <p>
                  Mobile:  {item.Mobile}
                </p>
                <p>
                  Email: {item.Email}
                </p>
                <p>
                  Location: <a className=' dark:hover:text-[#535bf2]' href={item.Location.Link}> {item.Location.Address} </a>
                </p>
              </div>
            ))
        }
      </div>

      <div className='info_item info_techology'>
        <div className="grid grid-cols-5 grid-rows-3 gap-4 ">
          {
            technologyStacks.map((item) => (
              <span key={item.id} >
                <i title={item.name} className={`${item.icon}`} style={{ fontSize: item.activate ? 50 : 0 }}></i>
              </span>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Info