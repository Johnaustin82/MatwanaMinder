import React from 'react'
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">Matwana Minder</div>
        <ul className="nav-menu">
        <li>About us</li>
        <li>Our services</li>
        </ul>

    </div>
  )
}

export default Navbar