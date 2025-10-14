import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaShoppingCart, FaTasks, FaChartLine } from 'react-icons/fa';
import { projects, ui } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { language } = useLanguage();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Mapeo de iconos para proyectos
  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes('commerce')) return <FaShoppingCart />;
    if (title.toLowerCase().includes('task')) return <FaTasks />;
    if (title.toLowerCase().includes('dashboard') || title.toLowerCase().includes('analytics')) return <FaChartLine />;
    return <FaShoppingCart />; // icono por defecto
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {projects.title[language]}
        </motion.h2>
        <div className="projects-grid" ref={ref}>
          {projects.items.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="project-icon" style={{ display: project.image ? 'none' : 'flex' }}>
                  {getProjectIcon(project.title)}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                {project.company && (
                  <div className="project-company">
                    <small>{project.company}</small>
                  </div>
                )}
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                {(project.demoUrl || project.githubUrl) && (
                  <div className="project-links">
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="btn btn-small">
                        <FaExternalLinkAlt /> {ui.projects.demo[language]}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="btn btn-small btn-outline">
                        <FaGithub /> {ui.projects.github[language]}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;