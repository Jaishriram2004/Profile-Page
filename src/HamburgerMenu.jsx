import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger-button" onClick={toggleMenu} aria-label="Toggle menu">
        &#9776;
      </button>
      <nav className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default HamburgerMenu;
