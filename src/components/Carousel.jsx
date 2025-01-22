import React from "react";
import "./Home.css";
import events from "../data/events";
import { useState, useEffect } from "react";

function Carousel() {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const recentYear = Object.keys(events.past)[0];
    const image = events.past[recentYear]
      .map((event) => event.pics[1] || null)
      .filter((image) => image)
      .slice(0, 6);
    setCarouselImages(image);
  }, []);

  return (
    <div className="c-div">
      <div className="slider-carousel">
        <div className="slider-track">
          {carouselImages &&
            carouselImages.map((img, index) => (
              <div key={index} className="slide">
                <img
                  src={img}
                  alt="Carousel image"
                  draggable={false}
                  className="aspect-auto"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
