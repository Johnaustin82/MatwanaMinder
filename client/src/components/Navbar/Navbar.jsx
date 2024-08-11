import React from 'react'
import './../Navbar/navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">Matwana Minder</div>
        <ul className="nav-menu">
        <li><Link to='/About'>About us</Link></li>
        <li><Link to='/services'>Our services</Link></li>
        <li><Link to='/Profile'>Profile</Link></li>
        </ul>

    </div>
  )
}

export default Navbar