import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Carousel = () => {
  const carouselImages = [
    "/home-1.jpg",
    "/home-2.jpg",
    "/home-3.jpg",
    "/home-4.png",
    "/home-5.jpg",
    "/home-6.jpg",
  ];

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="w-full"
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2.3,
            spaceBetween: 15,
          },
          // when window width is >= 868px
          868: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
      >
        {carouselImages.map((img, index) => (
          <SwiperSlide key={index} className="py-8 px-2">
            <div className="group relative">
              <img
                src={img}
                alt={`Carousel image ${index + 1}`}
                className="h-[200px] w-full rounded-lg object-cover"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
