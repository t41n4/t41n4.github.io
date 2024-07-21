import React from 'react'
import { award, contact, techStack } from '../../data'
import { motion, AnimatePresence } from "framer-motion"
import { pageAnimation } from "../../components/transition-animation/TransitionAnimation"
import clsx from 'clsx'

function Info() {
  return (
    <div
      className='page_content info fixed right-10 bottom-10 gap-10 text-[14px] text-base divide-y-2 divide-gray-300 dark:divide-gray-700 dark:text-gray-300   rounded-lg px-10 shadow-lg '
    >
      <div className='info_item info_info'>
        <p>
          Mobile: <a href={
            `tel:${contact.Mobile}`
          } >{contact.Mobile}</a>
        </p>
        <p >
          Email: <a href={
            `mailto:${contact.Email}`
          } >{contact.Email}</a>
        </p>
        <div>
          Location:
          <a
          // href={item.Location.Link}
          >
            {contact.Location.Address}
          </a>
        </div>
      </div>


      <div className='info_item flex flex-col info_socials'>
        {
          contact.Social.map(
            (item) =>
            (
              <div key={item.id} className='flex gap-2 items-center'>
                <i className={clsx(item.icon)}>
                </i>
                <a className={clsx('dark:hover:text-[#535bf2]')} href={item.link} >
                  {item.name}
                </a>
              </div>

            ))
        }
      </div>

      {/* <div className='info_item info_awards'>
        {
          award.map(
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
      </div> */}



      {/* <div className='info_item info_techology'> */}
      {/* <div className="grid grid-cols-5 grid-rows-3 gap-4 "> */}
      {/* {
            techStack.map((item) => (
              <span key={item.id} >
                <i title={item.name} className={`${item.icon}`} style={{ fontSize: item.activate ? 50 : 0 }}></i>
              </span>
            ))
          } */}
      {/* <SkillGridLayout /> */}
      {/* </div> */}
      {/* </div> */}
    </div >
  )
}

export default Info