import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import SkillCategory from './SkillCategory';
import CarouselControls from './CarouselControls';
import './Skills.css';

const Skills = () => {
  const { language } = useLanguage();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Estado del carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
  const categoriesPerSlide = 2; // Mostrar 2 categorías por slide
  const totalSlides = Math.ceil(skills.categories.length / categoriesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            {skills.title[language]}
          </motion.h2>
          
          <div className="skills-carousel-container">
            <CarouselControls 
              currentSlide={currentSlide}
              totalSlides={totalSlides}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
              setCurrentSlide={setCurrentSlide}
            />

            {/* Carrusel */}
            <div className="skills-carousel">
              <div key={`slide-${currentSlide}`} className="skills-slide">
                <div className="skills-grid">
                  {skills.categories
                    .slice(
                      currentSlide * categoriesPerSlide,
                      (currentSlide + 1) * categoriesPerSlide
                    )
                    .map((category, categoryIndex) => {
                      const actualIndex = currentSlide * categoriesPerSlide + categoryIndex;
                      return (
                        <SkillCategory
                          key={category.category[language]}
                          category={{
                            ...category,
                            category: category.category[language]
                          }}
                          inView={inView}
                          actualIndex={actualIndex}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;