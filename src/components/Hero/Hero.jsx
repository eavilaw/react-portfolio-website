import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaDownload } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { personalInfo, ui } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.h1 className="hero-title" variants={itemVariants}>
              {ui.hero.greeting[language]} <span className="highlight">{personalInfo.name}</span>
            </motion.h1>
            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              {personalInfo.title[language]}
            </motion.h2>
            <motion.p className="hero-description" variants={itemVariants}>
              {personalInfo.description[language]}
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">
                {ui.hero.contact[language]}
              </a>
              <a href={personalInfo.cvDocument[language]} className="btn btn-secondary" download>
                <FaDownload /> {ui.hero.downloadCV[language]}
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-image">
              <img 
                src={personalInfo.profileImage} 
                alt={`Foto de ${personalInfo.name}`} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <FaUser />
              </div>
            </div>
            <div className="image-bg"></div>
          </motion.div>
        </motion.div>
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;