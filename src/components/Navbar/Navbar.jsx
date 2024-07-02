import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MyPortfolio</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'navbar-list active' : 'navbar-list'}>
          <li className="navbar-item">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/experience" onClick={toggleMenu}>Experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
