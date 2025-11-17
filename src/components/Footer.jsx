import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="footer-content">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="footer-info">
                <h3 className="footer-brand">Christian Kambire</h3>
                <p className="footer-tagline">Développeur Full-Stack & Mobile</p>
                <p className="footer-location">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Bobo-Dioulasso, Burkina Faso
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-contact">
                <div className="contact-links">
                  <a href="mailto:christiankambire888@gmail.com" className="contact-link">
                    <i className="fas fa-envelope me-2"></i>
                    Email
                  </a>
                  <a href="https://wa.me/22651054075" className="contact-link">
                    <i className="fab fa-whatsapp me-2"></i>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="footer-copyright">
                  &copy; {currentYear} Christian Kambire. Tous droits réservés.
                </p>
              </div>
              <div className="col-md-6">
                <div className="footer-tech">
                  <span>Développé avec</span>
                  <span className="tech-love">❤️</span>
                  <span>React, Laravel & Flutter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;