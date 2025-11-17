import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="accueil" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 mx-auto text-center">
            <div className="hero-content">
              
              <h1 className="hero-title gradient-text">
                Kambiré Christian Romaric
              </h1>
              
              <h2 className="hero-subtitle">
                Développeur <span className="highlight">Full-Stack</span>
              </h2>
              
              <p className="hero-description">
                Créateur d'<span className="accent-text">expériences digitales innovantes</span> 
                et d'applications web sur mesure
              </p>
              
              <div className="tech-stack">
                <span className="tech-badge react">React</span>
                <span className="tech-badge laravel">Laravel</span>
                <span className="tech-badge javascript">JavaScript</span>
              </div>
              
              <div className="hero-cta">
                <button className="btn btn-primary">Voir mes projets</button>
                <button className="btn btn-secondary">Télécharger mon CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape"></div>
    </section>
  );
};

export default Hero;