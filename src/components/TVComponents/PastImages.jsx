import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const PastImages = () => {
  const PastEventImages = [
    "/events/Technovista2024/tv2k24gallery/img-1.png",
    "/events/Technovista2024/tv2k24gallery/img-2.png",
    "/events/Technovista2024/tv2k24gallery/img-3.png",
    "/events/Technovista2024/tv2k24gallery/img-4.png",
    "/events/Technovista2024/tv2k24gallery/img-5.png",
    "/events/Technovista2024/tv2k24gallery/img-6.png",
    "/events/Technovista2024/tv2k24gallery/img-7.png",
    "/events/Technovista2024/tv2k24gallery/img-8.png",
    "/events/Technovista2024/tv2k24gallery/img-9.png",
    "/events/Technovista2024/tv2k24gallery/img-10.png", 
    "/events/Technovista2024/tv2k24gallery/img-11.png",
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
        {PastEventImages.map((img, index) => (
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

export default PastImages;
