import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="#accueil" onClick={closeMenu}>
            <img src="src/components/images/logo 2.png" alt="Logo" className="logo-img" />
            <span className="logo-text">MonPortfolio</span>
          </a>
        </div>

        {/* Menu Desktop */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#accueil" className="nav-link" onClick={closeMenu}>
            Accueil
          </a>
          <a href="#projets" className="nav-link" onClick={closeMenu}>
            Projets
          </a>
          <a href="#competences" className="nav-link" onClick={closeMenu}>
            Compétences
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            À propos
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* Menu Burger */}
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;