import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import NavBar from "./components/nav-bar"
import ThemeToggle from "./components/theme-toggle"
import { circleAnimation } from "./components/transition-animation/TransitionAnimation"

import { Outlet } from "react-router-dom"


const App = () => {
  const location = useLocation();
  const [themBoxes, SetThemBoxes] = useState(0);

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
      <link rel="icon" href="/public/T.svg" />

      <div id="page-body">
        <motion.div
          initial={circleAnimation.initial}
          animate={circleAnimation.animate}
          transition={circleAnimation.transition}
          className={`center-circle`}>
        </motion.div>


        <div className="frame-line ">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <div className="frame-mask ">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <ThemeToggle />


        <main className="body-wrapper">
          <header className="author-identify">
            <h1 className="name ">Nguyen Anh Tai</h1>
            <p className="title">Software Developer</p>
            <nav className="navigator">
              <NavBar />
            </nav>
          </header>


          <div className="content_inner relative ">
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </div>
        </main>
      </div>

    </>
  )
}

export default App




