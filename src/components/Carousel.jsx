import React from "react";

import "./Home.css";

function Carousel() {
  const images = [
    "/homeimages/img1.jpg",
    "/homeimages/img2.jpg",
    "/homeimages/img3.jpg",
    "/homeimages/img4.jpg",
    "/homeimages/img5.jpg",
    "/homeimages/img6.jpg",
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
