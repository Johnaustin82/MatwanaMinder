import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBusFrontFill, BsPeopleFill } from 'react-icons/bs';
import { FaBell, FaTasks } from 'react-icons/fa';
import { IoMdAdd, IoMdSearch, IoMdStats } from "react-icons/io";
import { GiReceiveMoney } from 'react-icons/gi';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
          <Link to="/add-matatu">
            <IoMdAdd className='icon' /> Add Matatu
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/notifications">
            <FaBell className='icon' /> Comments
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="#" onClick={toggleDropdown}>
            <FaTasks className='icon' /> Task Management
          </Link>
          {dropdownOpen && (
            <ul className='dropdown-menu'>
              <li><Link to="/tasks-overview">Task Overview</Link></li>
              <li><Link to="/completed-tasks">Completed Tasks</Link></li>
              <li><Link to="/pending-tasks">Pending Tasks</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
