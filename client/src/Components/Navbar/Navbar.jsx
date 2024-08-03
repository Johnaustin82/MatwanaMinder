import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar/Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">Matwana Minder</div>
        <ul className="nav-menu">
        <li><Link to="/About">About us</Link></li>
        <li><Link to="/Services">Our services</Link></li>
        </ul>

    </div>
  )
}

export default Navbar