import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'
import Home from './Components/Home/Home'

function App() {

  return (
    <Router>
      <Navbar />
      <div>
        <Home />
        <Services />
        <About />
        <Contact />
      </div>
    </Router>
  )
}

export default App
