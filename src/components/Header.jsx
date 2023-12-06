import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <div className='navbar'>
        <div className="logo">
            <img src='./assets/shared/logo.svg' alt='logo' />
        </div>
        <div className={`navlinks ${isOpen ? 'active-navlinks' : ''}`}>
        <hr/>
            <ul>
                <li>
                    <NavLink className={({isActive})=>isActive ? "active-link" : ''} to='/'><span>00</span> HOME</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive ? "active-link" : ''} to='/destination'><span>01</span> DESTINATION</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive ? "active-link" : ''} to='/crew'><span>02</span> CREW</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive ? "active-link" : ''} to='/technology'><span>03</span> TECHNOLOGY</NavLink>
                </li>
            </ul>
        </div>
        <div className={`hamburger ${isOpen ? 'active-hamburger' : ''}`} onClick={()=>{setIsOpen(prevState=>!prevState)}}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}
