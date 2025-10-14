import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { personalInfo, ui } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; 2025 {personalInfo.name}. {ui.footer.built[language]} <FaHeart className="heart" /> {ui.footer.and[language]} React + Vite
          </p>
          <p className="footer-subtitle">
            {personalInfo.title[language]} {language === 'es' 
              ? 'apasionado por crear experiencias digitales increíbles'
              : 'passionate about creating incredible digital experiences'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;