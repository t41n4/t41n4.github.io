import React, { useRef } from 'react'

const pageAnimation = {
    exit: { opacity: 0, },
    transition: { duration: 0.15, },
    animate: { opacity: 1 },
    initial: { opacity: 0 },
}

const circleAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
        duration: 2,
        ease: [0, 0.71, 0.3, 1.01],
        scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
        }
    },
}

const enteringAnimation = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
            when: "afterChildren",
        },
    },
}



export { circleAnimation, pageAnimation, enteringAnimation }
