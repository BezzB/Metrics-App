import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { HiCog } from 'react-icons/hi';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="header">
        <ul className="back-stats">
          <li><NavLink to="/"><FaArrowLeft /></NavLink></li>
          <li>WorldWide Covid Statistics</li>
          <li className="mic-settings">
            <div><FaSearch /></div>
            <div><HiCog /></div>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
