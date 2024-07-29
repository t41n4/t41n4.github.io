import { motion } from "framer-motion"
import React from 'react'
import * as ReactDOMClient from "react-dom/client"
import { RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom"
import App from './App.jsx'
import ThemeToggle from "./components/theme-toggle"
import { circleAnimation } from "./components/transition-animation/TransitionAnimation"
import './index.scss'
import { Home, Info, Projects, Skill } from "./pages"


window.localStorage.setItem("theme", "light");
document.body.classList.add("dark:bg-[--dark-background]");

// const rootElement = document.getElementById("root");
// const root = ReactDOMClient.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Info />,
      },
      {
        path: "/Skill",
        element: <Skill />,
      },
    ],
    errorElement: < ErrorBoundary />
  },
]);

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode >
);

function ErrorBoundary() {
  return <div id="page-body">
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

    <main className="z-20 mix-blend-exclusion flex justify-center w-full h-full items-center flex-col text-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </main>
  </div>


}