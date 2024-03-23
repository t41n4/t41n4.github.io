import { motion } from "framer-motion"
import React, { useState } from 'react'
import { homeContent } from '../../constants'
import { useUniqueKey } from '../hooks'
import { pageAnimation } from "../transition-animation/TransitionAnimation"
import './index.scss'

const Home = () => {
    const [loading, setLoading] = useState(true)

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
                        < img src={homeContent[0]}
                            className={"rounded-[25%] borde", loading ? 'hidden' : 'block'}
                            alt="profile"
                            onLoad={() => {
                                setLoading(false)
                            }}
                        />
                    }
                    {
                        loading && <div className='h-[200px] w-[200px] bg-gray-300 rounded-[25%] animate-pulse'></div>
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