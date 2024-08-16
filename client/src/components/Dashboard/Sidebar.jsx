import React from 'react';
import { Link } from 'react-router-dom';
import { BsBusFrontFill, BsPeopleFill } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { IoMdAdd } from "react-icons/io";
import "./Sidebar.css"

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
        <Link to="/">
            <BsBusFrontFill className='icon' /> Dashboard
          </Link>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
        <Link to="/list-matatu">
            <BsBusFrontFill className='icon' /> List Matatu
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/Add-matatu">
            <IoMdAdd className='icon' /> Add Matatu
          </Link>
        </li>
        <li className='sidebar-item'>
          <Link to="/view-reviews">Reviews</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;