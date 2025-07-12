import React, { useRef, useState, useEffect } from "react";
import SponsorGfgTv from "./SponsorGfgTv";

function Sponsors() {
  const galleryRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let lastTimestamp = null;
    const speed = 80; // pixels per second (slower than gallery for better readability)

    const step = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered) {
        setTranslateX((prev) => {
          const totalWidth = galleryRef.current ? galleryRef.current.scrollWidth / 2 : 0;
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
    <div className="py-20 px-4 sm:px-6 lg:px-12 select-none relative">
      
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#daa425]">Sponsors</span>
          </h2>
          <div className="w-24 h-1 bg-[#daa425] mx-auto mb-6 rounded-full"></div>
          <p className="font-mono text-gray-300 mb-8 max-w-4xl mx-auto text-lg sm:text-xl">
            We extend our gratitude to the organizations supporting this event.
          </p>
        </div>

        {/* Sponsors Grid - Static on larger screens, scrolling on small screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* GeeksforGeeks TV Sponsor */}
          <div className="group h-full">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#daa425]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa425]/20 h-45 flex flex-col">
              <div className="relative overflow-hidden rounded-xl mb-6 p-2 backdrop-blur-sm flex-shrink-0">
                <div className="w-full h-30 object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 transform group-hover:scale-110">
                  <SponsorGfgTv />
                </div>
              </div>
            </div>
          </div>

          {/* I20fever Sponsor */}
          <div className="group h-full">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#daa425]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa425]/20 h-45 flex flex-col">
              <div className="relative overflow-hidden rounded-xl mb-6 p-2 backdrop-blur-sm flex-shrink-0">
                {/*Title */}
                <div className="text-[#daa425] font-semibold mb-2 text-sm tracking-wide">
                  Title Sponsor
                </div>
                <img
                  src="/i20fever Logo Original.jpg"
                  alt="I20fever Logo"
                  className="w-full h-40 object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* AlumnX Sponsor */}
          <div className="group h-full">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#daa425]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa425]/20 h-45 flex flex-col">
              <div className="relative overflow-hidden rounded-xl mb-6 p-2 backdrop-blur-sm flex-shrink-0">
                {/* Optional Title */}
                <div className="text-[#daa425] font-semibold mb-2 text-sm tracking-wide">
                  Special Partner
                </div>
                <img
                  src="/AlumnxLogo.png"
                  alt="AlumnX Logo"
                  className="w-full h-40 object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Sponsors for Mobile */}
        <div className="sm:hidden overflow-hidden relative w-full">
          <div className="w-full overflow-hidden">
            <div
              ref={galleryRef}
              className="flex gap-6 w-max"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isHovered ? "transform 0.2s ease-out" : "none",
                willChange: "transform",
              }}
            >
              {/* First set of sponsors */}
              {[1, 2, 3, 1, 2, 3].map((sponsorType, idx) => (
                <div key={idx} className="flex-shrink-0">
                  {sponsorType === 1 && (
                    <div className="group w-80 flex-shrink-0">
                      <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#daa425]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa425]/20 h-64 flex flex-col">
                        <div className="relative overflow-hidden rounded-xl mb-4 p-2 backdrop-blur-sm flex-shrink-0">
                          <div 
                            className="w-full h-32 object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 transform group-hover:scale-110"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <SponsorGfgTv />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {sponsorType === 2 && (
                    <div className="group w-80 flex-shrink-0">
                      <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#daa425]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa425]/20 h-64 flex flex-col">
                        <div className="relative overflow-hidden rounded-xl mb-4 p-2 backdrop-blur-sm flex-shrink-0">
                          <div className="text-[#daa425] font-semibold mb-2 text-sm tracking-wide">
                            Title Sponsor
                          </div>
                          <img
                            src="/i20fever Logo Original.jpg"
                            alt="I20fever Logo"
                            className="w-full h-32 object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 transform group-hover:scale-110"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {sponsorType === 3 && (
                    <div className="group w-80 flex-shrink-0">
                      <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#daa425]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#daa425]/20 h-64 flex flex-col">
                        <div className="relative overflow-hidden rounded-xl mb-4 p-2 backdrop-blur-sm flex-shrink-0">
                          <div className="text-[#daa425] font-semibold mb-2 text-sm tracking-wide">
                            Special Partner
                          </div>
                          <img
                            src="/AlumnxLogo.png"
                            alt="AlumnX Logo"
                            className="w-full h-32 object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 transform group-hover:scale-110"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          />
                        </div>
                      </div>
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