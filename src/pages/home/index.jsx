import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react'
import { introduction, resume } from '../../data'
import { useUniqueKey } from '../../components/hooks'
import { pageAnimation } from "../../components/transition-animation/TransitionAnimation"
import { avatar } from "../../assets"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.scss'

function Home() {
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
                        // loading ? (
                        //     <div className='h-[200px] w-[200px] bg-gray-300 rounded-[25%] animate-pulse' />
                        // ) : (
                        < LazyLoadImage
                            effect="blur"
                            width={200}
                            height={200}
                            src={avatar}
                            className="rounded-[25%] border block"
                            alt="avatar"
                            wrapperProps={{
                                // If you need to, you can tweak the effect transition using the wrapper style.
                                style: { transitionDelay: "0.5s" },
                            }}
                            onLoad={() => {
                                setLoading(false);
                            }}
                        />
                        // )
                    }

                </span>
                {
                    introduction.map((item) => (
                        item.includes('Resume') ?
                            <a href={resume} key={useUniqueKey(5)}>
                                Resume <i className="fas fa-file-arrow-down"/>
                            </a>
                            :
                            <p key={useUniqueKey(5)}>{item}</p>
                    ))
                }
            </div>


        </motion.section>


    )
}

export default Home