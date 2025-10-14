import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ui } from '../../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h3>Mi CV</h3>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>{ui.nav.home[language]}</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>{ui.nav.about[language]}</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>{ui.nav.skills[language]}</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>{ui.nav.experience[language]}</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>{ui.nav.projects[language]}</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>{ui.nav.contact[language]}</a>
        </div>
        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;