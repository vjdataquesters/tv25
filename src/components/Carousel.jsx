import React from "react";

import "./Home.css";

function Carousel() {
  const images = [
    "/home-1.jpg",
    "/home-2.jpg",
    "/home-3.jpg",
    "/home-4.jpg",
    "/home-5.jpg",
    "/home-6.jpg",
  ];

  return (
    <div className="c-div">
      <div className="slider-carousel">
        <div className="slider-track">
          {images &&
            images.map((img, index) => (
              <div key={index} className="slide">
                <img src={img} alt="Carousel image" draggable={false} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
