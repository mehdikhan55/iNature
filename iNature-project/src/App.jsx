import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <div className=" w-full p-0 ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>

  )
}
