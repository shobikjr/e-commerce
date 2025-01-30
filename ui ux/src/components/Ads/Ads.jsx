import React, { useState } from 'react';
import './Ads.css';

const Ads = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/600x400?text=Ad+1',
    'https://via.placeholder.com/600x400?text=Ad+2',
    'https://via.placeholder.com/600x400?text=Ad+3',
  ];

  const toggleCarousel = () => {
    setIsVisible(!isVisible);
  };

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="ad-container">
      <div className="ad-header" onClick={toggleCarousel}>
        {isVisible ? 'Exclusive Clothing Deals! (Click to Collapse)' : 'Exclusive Clothing Deals! (Click to Expand)'}
      </div>
      {isVisible && (
        <div className="ad-carousel">
          <img src={images[currentIndex]} alt={`Ad ${currentIndex + 1}`} />
          <div className="carousel-controls">
            <button onClick={prevImage}>&#10094;</button>
            <button onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ads;
