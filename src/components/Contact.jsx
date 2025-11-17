import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // DEBUG: Voir les données envoyées
    console.log('🔄 Données envoyées vers Laravel:', formData);

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // DEBUG: Voir le statut HTTP
      console.log('📊 Status HTTP:', response.status);

      const result = await response.json();

      // DEBUG: Voir la réponse complète de Laravel
      console.log('📨 Réponse Laravel:', result);
      
      if (result.success) {
        setSubmitMessage('✅ ' + result.message);
        setFormData({ 
          name: '', 
          email: '', 
          subject: '', 
          message: '' 
        });
      } else {
        // Gestion des erreurs de validation
        const errorMsg = result.errors 
          ? Object.values(result.errors).flat().join(', ')
          : result.message;
        setSubmitMessage('❌ ' + errorMsg);
      }
    } catch (error) {
      console.error('💥 Erreur fetch:', error);
      setSubmitMessage('❌ Erreur de connexion au serveur. Vérifiez que le serveur Laravel est démarré.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Me <span className="accent-text">Contacter</span></h2>
          <p className="section-subtitle">Discutons de votre projet</p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-card">
              {/* Message de statut */}
              {submitMessage && (
                <div className={`alert ${submitMessage.includes('✅') ? 'alert-success' : 'alert-error'}`}>
                  {submitMessage}
                </div>
              )}
              
              <div className="row g-4">
                {/* Informations de contact */}
                <div className="col-md-5">
                  <div className="contact-info">
                    <h3 className="contact-info-title">Restons en contact</h3>
                    <p className="contact-info-subtitle">
                      Disponible pour de nouvelles opportunités et collaborations
                    </p>
                    
                    <div className="contact-items">
                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-details">
                          <h4>Email</h4>
                          <a href="mailto:christiankambire888@gmail.com" className="contact-link">
                            christiankambire888@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="fab fa-whatsapp"></i>
                        </div>
                        <div className="contact-details">
                          <h4>WhatsApp</h4>
                          <a href="https://wa.me/22651054075" className="contact-link">
                            +226 51 05 40 75
                          </a>
                          <a href="https://wa.me/22667105163" className="contact-link">
                            +226 67 10 51 63
                          </a>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-details">
                          <h4>Localisation</h4>
                          <p className="contact-text">Bobo-Dioulasso, Burkina Faso</p>
                        </div>
                      </div>
                    </div>

                    {/* Technologies maîtrisées */}
                    <div className="tech-highlights">
                      <h5>Technologies Maîtrisées</h5>
                      <div className="tech-tags">
                        <span className="tech-tag">HTML/CSS/JS ES6</span>
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">PHP/Laravel</span>
                        <span className="tech-tag">Flutter</span>
                        <span className="tech-tag">MySQL/PostgreSQL</span>
                        <span className="tech-tag">Docker</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">Git/GitHub</span>
                        <span className="tech-tag">Figma</span>
                        <span className="tech-tag">WordPress</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulaire de contact */}
                <div className="col-md-7">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-intro">
                      <h4>Envoyez-moi un message</h4>
                      <p>Je réponds généralement dans les 24 heures</p>
                    </div>
                    
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">Votre nom *</label>
                          <input 
                            type="text" 
                            className="form-control custom-input" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required 
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">Votre email *</label>
                          <input 
                            type="email" 
                            className="form-control custom-input" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@exemple.com"
                            required 
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="subject" className="form-label">Sujet *</label>
                          <input 
                            type="text" 
                            className="form-control custom-input" 
                            id="subject" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="De quoi souhaitez-vous discuter ?"
                            required 
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="message" className="form-label">Votre message *</label>
                          <textarea 
                            className="form-control custom-input" 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6" 
                            placeholder="Décrivez votre projet ou posez-moi vos questions..."
                            required
                            disabled={isSubmitting}
                            minLength="10"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button 
                          type="submit" 
                          className="btn btn-primary custom-btn w-100"
                          disabled={isSubmitting}
                        >
                          <i className="fas fa-paper-plane me-2"></i>
                          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;