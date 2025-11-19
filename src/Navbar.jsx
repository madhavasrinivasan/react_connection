import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Posts App</Link>
        </div>
        <ul className="navbar-menu">
          <li><Link to="/">Posts</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
