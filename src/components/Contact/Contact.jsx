import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { personalInfo, ui } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert(ui.contact.success[language]);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {ui.contact.title[language]}
        </motion.h2>
        <div className="contact-content" ref={ref}>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>{language === 'es' ? '¡Hablemos!' : 'Let\'s talk!'}</h3>
            <p>{ui.contact.subtitle[language]}</p>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>{ui.contact.email[language]}</h4>
                <p>{personalInfo.email}</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>{ui.contact.phone[language]}</h4>
                <p>{personalInfo.phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>{ui.contact.location[language]}</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="social-links">
              {personalInfo.socialLinks.linkedin && (
                <a href={personalInfo.socialLinks.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {personalInfo.socialLinks.github && (
                <a href={personalInfo.socialLinks.github} className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
              {personalInfo.socialLinks.twitter && (
                <a href={personalInfo.socialLinks.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              )}
              {personalInfo.socialLinks.instagram && (
                <a href={personalInfo.socialLinks.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder={ui.contact.name[language]} 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder={ui.contact.email[language]} 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder={ui.contact.subject[language]} 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder={ui.contact.message[language]} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                {ui.contact.send[language]}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;