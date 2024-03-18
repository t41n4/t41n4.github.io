import { motion } from 'framer-motion';
import React from 'react'
import { enteringAnimation } from '../../transition-animation/TransitionAnimation';

function Welcome() {

    const textContainer = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                duration: 0.25,
                when: "afterChildren",
            },
        },
    };

    const text = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 0
        },
    };

    const InitialTransition = () => {
        return (
            
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={enteringAnimation}
                    className='relative z-[60] w-full h-full bg-black'
                >
                    <motion.div
                        variants={text}
                        className='text-blue-900'>
                    </motion.div>
                </motion.div>

            </div>
        );
    };

    return (
        <InitialTransition />
    )
}

export default Welcome