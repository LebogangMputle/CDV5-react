// import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#education">Education</a></li>
        <li className="navbar-item"><a href="#experience">Experience</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
