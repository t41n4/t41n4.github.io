import { motion } from "framer-motion"
import React from 'react'
import { homeContent } from '../../constants'
import { useUniqueKey } from '../hooks'
import { pageAnimation } from "../transition-animation/TransitionAnimation"
import './index.scss'

function Home() {
    // useEffect(() => {
    //     document.querySelector('.fade').classList.add('fade-in')
    // }, [])

    return (
        <motion.section
            initial={pageAnimation.initial}
            animate={pageAnimation.animate}
            transition={pageAnimation.transition}
            exit={pageAnimation.exit}

            className='introduction-section'>

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
            

        </motion.section>

        
    )
}

export default Home