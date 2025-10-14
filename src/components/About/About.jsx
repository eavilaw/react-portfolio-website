import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaMobile } from 'react-icons/fa';
import { personalInfo, aboutMe } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            {aboutMe.title[language]}
          </motion.h2>
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <p>{aboutMe.description[language]}</p>
              <div className="about-stats">
                {aboutMe.stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <h3>{stat.number}</h3>
                    <p>{stat.label[language]}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="about-image" variants={itemVariants}>
              <div className="about-profile-image">
                <img 
                  src={personalInfo.profileImage} 
                  alt={`Foto profesional de ${personalInfo.name}`} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="about-image-placeholder" style={{ display: 'none' }}>
                  <FaCode />
                </div>
              </div>
              <div className="about-features">
                {aboutMe.features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    {index === 0 && <FaLaptopCode className="feature-icon" />}
                    {index === 1 && <FaMobile className="feature-icon" />}
                    {index === 2 && <FaCode className="feature-icon" />}
                    <h3>{feature.title[language]}</h3>
                    <p>{feature.description[language]}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;