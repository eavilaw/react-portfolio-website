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

            {/* Carrusel 3D */}
            <div className="skills-carousel">
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                // Calcular la posición relativa de cada slide
                let position = slideIndex - currentSlide;
                if (position > totalSlides / 2) position -= totalSlides;
                if (position < -totalSlides / 2) position += totalSlides;

                // Determinar la clase CSS basada en la posición
                let slideClass = 'skills-slide ';
                if (position === 0) slideClass += 'active';
                else if (position === 1) slideClass += 'next';
                else if (position === -1) slideClass += 'prev';
                else if (position === 2) slideClass += 'far-next';
                else if (position === -2) slideClass += 'far-prev';
                else slideClass += 'hidden';

                return (
                  <div key={slideIndex} className={slideClass}>
                    <div className="skills-grid">
                      {skills.categories
                        .slice(
                          slideIndex * categoriesPerSlide,
                          (slideIndex + 1) * categoriesPerSlide
                        )
                        .map((category, categoryIndex) => {
                          const actualIndex = slideIndex * categoriesPerSlide + categoryIndex;
                          return (
                            <SkillCategory
                              key={`${slideIndex}-${category.category[language]}`}
                              category={{
                                ...category,
                                category: category.category[language]
                              }}
                              inView={inView && position === 0}
                              actualIndex={actualIndex}
                            />
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;