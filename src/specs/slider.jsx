import React, { useState } from "react";

import "./slider.css"

// Sample images and texts
const slides = [
  { image: `${import.meta.env.BASE_URL}/pics/gtr-r32.jpg`, text: "This is image 1" },
  { image: `${import.meta.env.BASE_URL}/pics/gtr-r33.jpg`, text: "This is image 2" },
  { image: `${import.meta.env.BASE_URL}/pics/gtr-r34.jpg`, text: "This is image 3" }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to set the current slide directly
  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {/* Display the current image */}
      <img src={slides[currentIndex].image} alt="Slide" className="slider-image" />

      {/* Display the text based on the current image */}
      <div className="slider-text">{slides[currentIndex].text}</div>

      {/* Buttons to navigate to specific images */}
      <button onClick={() => setSlide(0)} className="slide-button">Image 1</button>
      <button onClick={() => setSlide(1)} className="slide-button">Image 2</button>
      <button onClick={() => setSlide(2)} className="slide-button">Image 3</button>
    </div>
  );
};

export default ImageSlider;
