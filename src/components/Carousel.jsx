import React from "react";
import "./Home.css";
import events from "../data/events";

function Carousel() {
  const recentYear = Object.keys(events.past)[0];
  const images = events.past[recentYear].map((event) =>
    event.pics[1] ? event.pics[1] : event.pics[0]
  );

  return (
    <div className="c-div">
      <div className="slider-carousel">
        <div className="slider-track">
          {images &&
            images.map((img, index) => (
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
