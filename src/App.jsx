import { BrowserRouter } from "react-router-dom"
import { Home, Info, Projects, Welcome } from "./components"
import { Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useWindowSize } from "./components/hooks"
import { circleAnimation } from "./components/TransitionAnimation/TransitionAnimation"

const App = () => {
  const location = useLocation();
  const [themBoxes, SetThemBoxes] = useState(0);
  const right = useRef(0);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (!themBoxes) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        SetThemBoxes(document.querySelector('.theme .dark ._box input'))
      } else {
        SetThemBoxes(document.querySelector('.theme .light ._box input'))
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
    else {
      themBoxes.checked = true;
    }
  }, [themBoxes])


  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      <div id="Page" className="absolute left-0 top-0 w-full h-full whitespace-nowrap ">
        <motion.div
          initial={circleAnimation.initial}
          animate={circleAnimation.animate}
          transition={circleAnimation.transition}
          className={`background bg-[#242424] dark:bg-[#e6e6e6] rounded-[50%]`}>
        </motion.div>

        <div className="mask z-30  fixed top-0 left-0 h-full w-full pointer-events-none ">
          <div className="mask_top w-full h-7 top-0 left-0 absolute opacity-90 bg-[#e6e6e6] dark:bg-[#242424]"></div>
          <div className="mask_bottom w-full h-7 bottom-0 left-0 absolute opacity-90 bg-[#e6e6e6] dark:bg-[#242424]"></div>
          <div className="mask_left h-full w-7 top-0 left-0 absolute opacity-90 bg-[#e6e6e6] dark:bg-[#242424]"></div>
          <div className="mask_right h-full w-7 bottom-0 right-0 absolute opacity-90 bg-[#e6e6e6] dark:bg-[#242424]"></div>

        </div>

        <div className="frame z-50 fixed top-7 left-7 bottom-7 right-7 pointer-events-none opacity-60 mix-blend-exclusion">
          <div className="frame_line frame_line-top absolute top-0 w-full border   "></div>
          <div className="frame_line frame_line-bottom absolute bottom-0 w-full border  "></div>
          <div className="frame_line frame_line-left absolute left-0 h-full border  "></div>
          <div className="frame_line frame_line-right absolute right-0 h-full border  "></div>
        </div>

        <div className="theme z-50 fixed left-[-2.75em] bottom-20 rotate-[-90deg] flex flex-row gap-x-4  mix-blend-exclusion">

          <div className="dark flex flex-row justify-center items-center gap-1">
            <div className="_box">
              <input type="checkbox" onChange={(e) => {
                const lightBox = document.querySelector('.theme .light ._box input');
                const darkBox = document.querySelector('.theme .dark ._box input');
                if (darkBox.checked) {
                  lightBox.checked = false;
                  darkBox.checked = true;
                  document.documentElement.classList.replace('light', 'dark');
                  localStorage.setItem('theme', 'dark');

                }
                else {
                  darkBox.checked = false;
                  lightBox.checked = true;
                  document.documentElement.classList.replace('dark', 'light')
                  localStorage.setItem('theme', 'light');

                }
              }} />
            </div>
            <div className="_text">
              Dark
            </div>
          </div>

          <div className="light flex flex-row justify-center items-center gap-1">
            <div className="_box">
              <input type="checkbox" onChange={(e) => {

                const lightBox = document.querySelector('.theme .light ._box input');
                const darkBox = document.querySelector('.theme .dark ._box input');

                if (lightBox.checked) {
                  darkBox.checked = false;
                  lightBox.checked = true;
                  document.documentElement.classList.replace('dark', 'light');
                  localStorage.setItem('theme', 'light');
                }
                else {
                  darkBox.checked = true;
                  lightBox.checked = false;
                  document.documentElement.classList.replace('light', 'dark')
                  localStorage.setItem('theme', 'dark');
                }

              }} />
            </div>
            <div className="_text">
              Light
            </div>
          </div>
        </div>


        <main className="content z-20 fixed top-0 left-0 h-full w-full  mix-blend-exclusion ">

          <header className="siteHeader z-50 fixed top-12 left-14 ">
            <h1 className="siteHeader_title text-[30px] xl:text-[60px]">Nguyen Anh Tai</h1>
            <p className="siteHeader_label font-thin text-[14px] pt-[1px]">Software Developer</p>
            <div className="siteHeader_nav mt-12 ">
              <NavBar />
            </div>
          </header>

          <div className="content_inner relative min-h-full ">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/info" element={<Info />} />
              </Routes>
            </AnimatePresence>
          </div>
        </main>


      </div>

    </>
  )
}

export default App




