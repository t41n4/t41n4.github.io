import React, { useEffect } from 'react'
import { homeContent } from '../constants'
import { useUniqueKey } from './hooks'
import { motion } from "framer-motion"
import { pageAnimation } from "./TransitionAnimation/TransitionAnimation"

function Home() {
    // useEffect(() => {
    //     document.querySelector('.fade').classList.add('fade-in')
    // }, [])

    return (
        <motion.div
            initial={pageAnimation.initial}
            animate={pageAnimation.animate}
            transition={pageAnimation.transition}
            exit={pageAnimation.exit}

            className='fixed bottom-16 right-16 text-[14px] w-[200px] flex flex-col font-light whitespace-normal'>

            <div className='flex flex-col space-y-2'>
                <span className='invert dark:invert-0 pb-2'>
                    {
                        < img src={homeContent[0]} alt="" className='rounded-[25%] border ' />
                    }
                </span>
                {
                    homeContent.map((item) => (
                        item.includes('assets') ?
                            <div key={useUniqueKey(5)}></div> :
                            <span key={useUniqueKey(5)}>{item}</span>
                    ))
                }
            </div>

        </motion.div>
    )
}

export default Home