import React from "react";

const images = [
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
  "/events/Technovista2024/tv2k24gallery/img-12.png",
  "/events/Technovista2024/tv2k24gallery/img-13.png",
  "/events/Technovista2024/tv2k24gallery/img-14.png",
  "/events/Technovista2024/tv2k24gallery/img-15.png",
  "/events/Technovista2024/tv2k24gallery/img-16.png",
];

const ScrollingGallery = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="bottom-0 left-0 w-full overflow-hidden">
        <div
          className="flex gap-4 w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] items-end"
          style={{
            animationName: "scroll",
          }}
        >
          {/* Repeat the images twice for seamless loop */}
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="flex-shrink-0">
              <img
                src={src}
                alt={`img-${idx}`}
                className="w-72 object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingGallery;