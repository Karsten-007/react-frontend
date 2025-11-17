import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold brand-logo" href="#accueil">
          <span className="brand-text">MonPortfolio</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link hover-effect" href="#accueil">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-effect" href="#projets">Projets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-effect" href="#competences">Compétences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-effect" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;