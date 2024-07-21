import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter as Router } from "react-router-dom"
import * as ReactDOMClient from "react-dom/client";

document.body.classList.add("dark:bg-[--dark-background]");
window.localStorage.setItem("theme", "light");

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
