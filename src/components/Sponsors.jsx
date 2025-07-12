import React, { useRef, useState, useEffect } from "react";
import SponsorGfgTv from "./SponsorGfgTv";

function Sponsors() {
  const galleryRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  // Fine-tuning variables
  const sponsorBgColor = "bg-white";

  useEffect(() => {
    let animationFrameId;
    let lastTimestamp = null;
    const speed = 30; // pixels per second (slower speed for mobile)

    const step = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setTranslateX((prev) => {
        const totalWidth = galleryRef.current
          ? galleryRef.current.scrollWidth / 2
          : 0;
        const newX = prev - (speed * delta) / 1000;
        return newX <= -totalWidth ? 0 : newX;
      });

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 select-none relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="text-[#daa425]">Sponsors</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#daa425] mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="font-mono text-gray-300 mb-4 sm:mb-6 max-w-4xl mx-auto text-sm sm:text-lg lg:text-xl px-4">
            We extend our gratitude to the organizations supporting this event.
          </p>
        </div>

        {/* Desktop Grid - No Boxes */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* I20fever Sponsor */}
          <div className="text-center">
            <div className="text-[#daa425] font-mono font-semibold mb-2 text-base tracking-wide">
              Title Sponsor
            </div>
            <div
              className={`${sponsorBgColor} p-2 rounded flex justify-center`}
            >
              <img
                src="/i20fever.png"
                alt="I20fever Logo"
                className="h-8 lg:h-12 w-auto object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#daa425] font-mono font-semibold mb-2 text-base tracking-wide">
              Silver Sponsor
            </div>
            <div
              className={`${sponsorBgColor} p-2 rounded flex justify-center`}
            >
              <img
                src="/AlumnxLogo.png"
                alt="AlumnX Logo"
                className="h-8 lg:h-12 w-auto object-contain"
              />
            </div>
          </div>
          {/* GeeksforGeeks TV Sponsor */}
          <div className="text-center">
            <SponsorGfgTv />
          </div>
          {/* AlumnX Sponsor */}
        </div>

        {/* Mobile Infinite Scroll */}
        <div className="md:hidden overflow-hidden relative w-full">
          <div className="w-full overflow-hidden">
            <div
              ref={galleryRef}
              className="flex gap-8 w-max"
              style={{
                transform: `translateX(${translateX}px)`,
                willChange: "transform",
              }}
            >
              {/* Duplicate sponsors for seamless loop */}
              {Array(6)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx} className="flex-shrink-0">
                    {idx % 3 === 0 && (
                      <div className="w-64 text-center">
                        <div className="text-[#daa425] font-mono font-semibold mb-1 text-base tracking-wide">
                          Title Sponsor
                        </div>
                        <div
                          className={`${sponsorBgColor} p-2 rounded flex justify-center`}
                        >
                          <img
                            src="/i20fever.png"
                            alt="I20fever Logo"
                            className="h-8 w-auto object-contain"
                          />
                        </div>
                      </div>
                    )}
                    {idx % 3 === 1 && (
                      <div className="w-64 text-center">
                        <div className="text-[#daa425] font-mono font-semibold mb-1 text-base tracking-wide">
                          Silver Sponsor
                        </div>
                        <div
                          className={`${sponsorBgColor} p-2 rounded flex justify-center`}
                        >
                          <img
                            src="/AlumnxLogo.png"
                            alt="AlumnX Logo"
                            className="h-8 w-auto object-contain"
                          />
                        </div>
                      </div>
                    )}
                    {idx % 3 === 2 && (
                      <div className="w-64 text-center">
                        <SponsorGfgTv />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
