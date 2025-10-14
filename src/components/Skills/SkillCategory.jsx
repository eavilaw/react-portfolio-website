import React from 'react';
import { motion } from 'framer-motion';
import { getSkillIcon, getSkillColor } from './skillsConfig';

const SkillCategory = ({ category, inView, actualIndex }) => {
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
    <motion.div 
      className="skill-category"
      variants={itemVariants}
    >
      <h3>{category.category}</h3>
      <div className="skills-list">
        {category.technologies.map((tech, techIndex) => (
          <div key={tech.name} className="skill-item">
            <div className="skill-header">
              <div className="skill-info">
                <span className="skill-icon" style={{ color: getSkillColor(tech.name) }}>
                  {getSkillIcon(tech.name)}
                </span>
                <span className="skill-name">{tech.name}</span>
              </div>
              <span className="skill-percentage">{tech.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div 
                className="skill-progress"
                style={{ backgroundColor: getSkillColor(tech.name) }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: actualIndex * 0.2 + techIndex * 0.1 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;