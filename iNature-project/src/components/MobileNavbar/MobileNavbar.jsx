import React, { useState } from 'react'
import styles from './MobileNavbar.module.css'
import { menu } from '../../assets'
import { close } from '../../assets';
import { Link } from 'react-router-dom';
import { navLinks } from '../../constants';

export default function MobileNavbar({active,setActive}) {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='sm:hidden flex justify-end items-center'>
            <img src={toggle ? close : menu}
                alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-16 right-0 mx-2 my-4 min-w-[180px] rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4 '>

                    {navLinks.map((link) => (
                        <Link
                            to={link.path}
                            key={link.id}
                            className={`${active === link.title
                                ? 'text-white ' : 'text-slate-300'
                                } hover:text-white text-[16px] cursor-pointer`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(link.title);
                            }}
                        >
                            {link.title}
                        </Link>
                    ))}

                </ul>
            </div>

        </div>
    )
}
