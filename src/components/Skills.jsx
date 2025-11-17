import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [competences, setCompetences] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompetences = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/competences');
        const result = await response.json();
        
        if (result.success) {
          setCompetences(result.competences);
        } else {
          setError('Erreur lors du chargement des compétences');
        }
      } catch {
        setError('Erreur de connexion au serveur');
      } finally {
        setLoading(false);
      }
    };

    fetchCompetences();
  }, []);

  // Mapping des catégories API vers vos catégories existantes
  const categoryMapping = {
    'frontend': 'Frontend & Mobile',
    'backend': 'Backend & Bases de données', 
    'mobile': 'Frontend & Mobile',
    'bdd': 'Backend & Bases de données',
    'outils': 'Outils & Technologies'
  };

  // Niveaux par défaut (vous pouvez adapter selon vos besoins)
  const getSkillLevel = (skillName) => {
    const levels = {
      'HTML/CSS': 'Expert',
      'JavaScript ES6+': 'Expert', 
      'React': 'Intermédiaire',
      'Flutter': 'Intermédiaire',
      'Bootstrap': 'Expert',
      'PHP': 'Expert',
      'Laravel': 'Intermédiaire',
      'Node.js': 'Débutant',
      'Python': 'Débutant',
      'MySQL': 'Expert',
      'PostgreSQL': 'Intermédiaire',
      'Redis': 'Débutant',
      'Git/GitHub': 'Expert',
      'Docker': 'Intermédiaire',
      'Figma': 'Intermédiaire',
      'WordPress': 'Intermédiaire'
    };
    return levels[skillName] || 'Intermédiaire';
  };

  if (loading) return (
    <section id="competences" className="skills-section">
      <div className="container text-center">
        <div className="loading">Chargement des compétences...</div>
      </div>
    </section>
  );

  if (error) return (
    <section id="competences" className="skills-section">
      <div className="container text-center">
        <div className="error alert alert-danger">{error}</div>
      </div>
    </section>
  );

  // Grouper les compétences par catégorie formatée
  const groupedSkills = {};
  Object.entries(competences).forEach(([apiCategory, skills]) => {
    const formattedCategory = categoryMapping[apiCategory] || apiCategory;
    if (!groupedSkills[formattedCategory]) {
      groupedSkills[formattedCategory] = [];
    }
    skills.forEach(skill => {
      groupedSkills[formattedCategory].push({
        name: skill,
        level: getSkillLevel(skill)
      });
    });
  });

  // Ajouter la catégorie IA manuellement (pas dans l'API)
  groupedSkills['IA & Autres'] = [
    { name: "DeepSeek", level: "Expert" },
    { name: "ChatGPT", level: "Expert" },
    { name: "Gemini", level: "Expert" }
  ];

  return (
    <section id="competences" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes <span className="accent-text">Compétences</span></h2>
          <p className="section-subtitle">Technologies que je maîtrise réellement</p>
        </div>
        <div className="skills-container">
          {Object.entries(groupedSkills).map(([category, items], index) => (
            <div key={index} className="skill-category">
              <h3>{category}</h3>
              <ul className="skill-list">
                {items.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <span translate="no">{skill.name}</span>  
                    <span className={`skill-level ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;