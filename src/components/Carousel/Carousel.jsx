import React, { useState, useEffect } from 'react';
import { hotels } from '../utils/data/data';
import "./Carousel.scss";
import { Link } from 'react-router-dom';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth > 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);

    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % hotels.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + hotels.length) % hotels.length);
  };

  const visibleItems = hotels.slice(currentIndex, currentIndex + itemsToShow).map((hotel, index) => (
    <Link key={index} className="carousel__item" to={`/hotel/${hotel.id}`}>
      <img src={hotel.image} alt={hotel.name} className="carousel__item--image" />
      <div>
        <p className='carousel__item--title'>{hotel.name}</p>
        <div>
          <p>{hotel.city}</p>
          <p>{hotel.rating}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="carousel">
      <div className="carousel__container">
        <button onClick={handlePrev} className="carousel__button carousel__button--prev">❮</button>

        <div className="carousel__items-container">
          {visibleItems}
        </div>

        <button onClick={handleNext} className="carousel__button carousel__button--next">❯</button>
      </div>
    </div>
  );
};
