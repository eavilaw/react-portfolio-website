import React from 'react';
import { CarouselIcons } from './skillsConfig';

const CarouselControls = ({ 
  currentSlide, 
  totalSlides, 
  nextSlide, 
  prevSlide, 
  setCurrentSlide 
}) => {
  const { ChevronLeft, ChevronRight } = CarouselIcons;

  return (
    <>
      {/* Botones de navegación */}
      <button 
        className="carousel-btn carousel-btn-prev" 
        onClick={prevSlide}
        disabled={totalSlides <= 1}
      >
        <ChevronLeft />
      </button>
      
      <button 
        className="carousel-btn carousel-btn-next" 
        onClick={nextSlide}
        disabled={totalSlides <= 1}
      >
        <ChevronRight />
      </button>

      {/* Indicadores de slides */}
      <div className="carousel-indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselControls;