import React, { useRef, useState, useEffect } from "react";

const images = Array.from(
  { length: 16 },
  (_, i) =>
    `https://cdn.jsdelivr.net/gh/vjdataquesters/cdnstorage@main/tv2k24gallery/img-${
      i + 1
    }.png`
);

const ScrollingGallery = () => {
  const galleryRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let lastTimestamp = null;
    const speed = 120; // pixels per second

    const step = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered) {
        setTranslateX((prev) => {
          const totalWidth = galleryRef.current.scrollWidth / 2;
          const newX = prev - (speed * delta) / 1000;
          return newX <= -totalWidth ? 0 : newX;
        });
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div className="overflow-hidden relative w-full select-none">
      <div className="w-full overflow-hidden">
        <div
          ref={galleryRef}
          className="flex gap-4 w-max items-end"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isHovered ? "transform 0.2s ease-out" : "none",
            willChange: "transform",
          }}
        >
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="flex-shrink-0">
              <img
                src={src}
                alt={`img-${idx}`}
                className="w-72 object-contain rounded-xl transition-transform duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingGallery;
