import React, { useEffect, useRef } from "react";

import "./SmoothScroll.css";
import { useWindowSize } from "../hooks";
import { projectsContent } from "../../constants";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

const SmoothScroll = ({ children }) => {
    // 1. Observewindow Height
    const windowSize = useWindowSize();

    //2. Scroll 
    const scrollingContainerRef = useRef();


    // 3. update content height everytime projectContent or windowHeight change
    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height, projectsContent]);

    const setBodyHeight = () => {
        const body = document.body;
        body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
    };

    // 4. update content height everytime projectContent or windowHeight change

    const { scrollY } = useScroll() // measures how many pixels user has scrolled vertically
    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
    // ... based on current scroll position to translateY the document in a natural way
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
            {/* <div ref={scrollingContainerRef}>
            </div> */}
        </motion.div>
    );
};

export default SmoothScroll;
