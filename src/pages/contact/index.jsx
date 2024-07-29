import clsx from 'clsx'
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { avatar } from "../../assets"
import { contact } from '../../data'

function Info() {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className='page_content info fixed right-10 bottom-10 gap-10 text-[14px] text-base divide-y-2 divide-gray-300 dark:divide-gray-700 dark:text-gray-300   rounded-lg px-10 shadow-lg '
    >

      <span className='invert dark:invert-0 flex w-full justify-end items-center pb-5'>
        <LazyLoadImage
          effect="blur"
          width={200}
          height={200}
          src={avatar}
          className="rounded-[25%] border block"
          alt="avatar"
          wrapperProps={{
            style: { transitionDelay: "0.5s" },
          }}
          onLoad={() => {
            setLoading(false);
          }}
        />
      </span>

      <div className='info_item info_info text-end'>
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
              <div key={item.id} className='flex gap-2 items-center justify-end'>
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