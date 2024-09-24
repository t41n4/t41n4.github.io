import React, { useEffect, useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useWindowSize } from "../hooks";
import "./index.module.scss";

const SmoothScroll = ({ children }) => {

    const windowSize = useWindowSize();
    const scrollingContainerRef = useRef();

    useEffect(() => {
        const setBodyHeight = () => {
            const scrollContainerElement = scrollingContainerRef.current;
            let height = 0;
            try {
                height = scrollContainerElement.getBoundingClientRect().height;
            }
            catch (e) {
                height = windowSize.height;
            }
            document.body.style.height = `${height}px`;
        }

        setBodyHeight();

        return () => {
            console.log('cleanup');
            document.body.style.height = "auto";
        }
    }, [windowSize.height, children, scrollingContainerRef]);

    const { scrollY } = useScroll() // measures how many pixels user has scrolled vertically
    const transform = useTransform(scrollY, [0, windowSize.height], [0, -windowSize.height])
    const physics = { damping: 15, mass: 0.27, stiffness: 19 } // easing of smooth scroll
    const spring = useSpring(transform, physics) // apply easing to the negative scroll value

    return (
        <motion.div
            className="scroll-container"
            ref={scrollingContainerRef}
            style={{ y: spring }}
        >
            {children}
        </motion.div>
    );
};

export default SmoothScroll;
