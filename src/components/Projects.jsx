import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/projets');
        const result = await response.json();
        
        if (result.success) {
          setProjects(result.projets);
        } else {
          setError('Erreur lors du chargement des projets');
        }
      } catch {
        setError('Erreur de connexion au serveur');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return (
    <section id="projets" className="projects-section">
      <div className="container text-center">
        <div className="loading">Chargement des projets...</div>
      </div>
    </section>
  );

  if (error) return (
    <section id="projets" className="projects-section">
      <div className="container text-center">
        <div className="error alert alert-danger">{error}</div>
      </div>
    </section>
  );

  return (
    <section id="projets" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes <span className="accent-text">Projets</span></h2>
          <p className="section-subtitle">Découvrez mes réalisations concrètes</p>
        </div>
        <div className="row g-4">
          {projects.map(project => (
            <div key={project.id} className="col-lg-6 col-md-6">
              <div className="project-card">
                <div className={`project-image ${project.categorie}`}>
                  <div className="project-overlay">
                    <span className="view-project">Voir le projet</span>
                    <div className="project-links">
                      <button className="btn-link">Détails</button>
                      <button className="btn-link">Demo</button>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.titre}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;