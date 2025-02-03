// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../styles/Navbar.css'; // Import the corresponding CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Brand Name */}
        <div className="navbar-brand">
          <Link to="/">MyPortfolio</Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;