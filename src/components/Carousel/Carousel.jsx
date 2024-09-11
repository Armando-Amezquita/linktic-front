import React, { useState } from 'react';
import { hotels } from '../utils/data/data';
import "./Carousel.scss"

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? hotels.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <h2>Popular Hotels</h2>
      <div className="carousel__container">
        <button onClick={handlePrev} className="carousel__button carousel__button--prev">❮</button>

        <div className="carousel__item">
          <img src={hotels[currentIndex].image} alt={hotels[currentIndex].name} className="carousel__item--image" />
          <h3>{hotels[currentIndex].name}</h3>
          <p>{hotels[currentIndex].city}</p>
        </div>

        <button onClick={handleNext} className="carousel__button carousel__button--next">❯</button>
      </div>
    </div>
  );
};