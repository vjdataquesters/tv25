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
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      className="w-full max-w-5xl md:h-[32rem] mx-auto rounded-lg overflow-hidden py-8"
    >
      {images.map((pic, index) => (
        <SwiperSlide key={index}>
          <img
            src={pic}
            alt={`${event.name} - Image ${index + 1}`}
            className="w-full h-full"
            draggable={false}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
