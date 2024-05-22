// Slideshow.js
import React, { useState, useEffect } from 'react';
import './style.css';

const slides = [
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+1',
      caption: 'Caption for Slide 1'
    },
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+2',
      caption: 'Caption for Slide 2'
    },
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+3',
      caption: 'Caption for Slide 3'
    }
  ];
  
  function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(slideInterval);
    }, []);
  
    return (
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Slideshow;