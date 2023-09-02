import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Moniotoring from './pages/Monitoring/Moniotoring';

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className=" w-full p-0 ">
      <Navbar active={active} setActive={setActive}/>
      <Routes>
        <Route path='/' element={<Home  active={active} setActive={setActive}/>} />
        <Route path='/about' element={<About  active={active} setActive={setActive}/>} />
        <Route path='/team' element={<Team  active={active} setActive={setActive}/>} />
        <Route path='/contact' element={<Contact active={active} setActive={setActive}/>} />
        <Route path='/monitoring' element={<Moniotoring active={active} setActive={setActive}/>}/>
      </Routes>
    </div>

  )
}
