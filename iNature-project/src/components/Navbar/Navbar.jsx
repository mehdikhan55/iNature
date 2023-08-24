import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'
import { navLinks } from '../../constants'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
import MobileNavbar from '../MobileNavbar/MobileNavbar'

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className={`${styles.navbar} px-6 w-full flex items-center py-[16px] fixed top-0 border  border-emerald-500`}>

      <div className='w-full flex items-center justify-between gap-5 max-w-7xl mx-auto'>

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img className={`${styles.myLogo} sm:min-w-[150px] w-[100px]`} src={logo} alt="logo" />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
         
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.id}
              className={`${active === link.title
                  ? 'text-[white] ' : 'text-slate-300'
                } hover:text-white text-[18px]`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </Link>
          ))}
          
        </ul>
        <div className=' sm:flex  hidden gap-3'>
          <Button title='Sign Up'/>
          <Button title='Login'/>
        </div>
            <MobileNavbar active={active} setActive={setActive} />  
      </div>

    </nav>
  )
}
