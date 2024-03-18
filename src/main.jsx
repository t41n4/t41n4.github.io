import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter as Router } from "react-router-dom"

document.body.classList.add("dark:bg-[--dark-background]");
window.localStorage.setItem("theme", "light");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
