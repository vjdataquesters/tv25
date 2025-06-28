import React, { useRef, useEffect } from "react";
import "./TvComponents.css";

function WhatToExpectTV() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    function isFullyVisible(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function isFullyVisibleVertically(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    const onWheel = (e) => {
      if (!container) return;
      if (!isFullyVisible(container)) return;
      if (e.deltaY < 0 && !isFullyVisibleVertically(container)) return;

      const deltaY = e.deltaY;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const atStart = container.scrollLeft <= 0;
      const atEnd = container.scrollLeft + 1 >= maxScrollLeft;

      const scrollingForward = deltaY > 0;
      const scrollingBackward = deltaY < 0;

      const shouldScrollHorizontally =
        (scrollingForward && !atEnd) || (scrollingBackward && !atStart);

      if (shouldScrollHorizontally) {
        e.preventDefault();
        container.scrollLeft += deltaY;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  const cardTexts = [
    { title: "ML Challenge", subtitle: "Model the Unknown" },
    { title: "Guest Lecture", subtitle: "The Future of AI" },
    { title: "Blogathon", subtitle: "Tech Pen Masters" },
    { title: "DQ Code Fest", subtitle: "Battle of Coders" },
    { title: "Debug or Die", subtitle: "Ultimate Debugging Battle" },
    { title: "24hr Hackathon", subtitle: "Innovate. Create. Dominate." },
    { title: "Workshop", subtitle: "Full Stack Web Dev" },
  ];

  const icons = [
    <img
      src="/events/Technovista2025/tv25-icons/ml_challenge.png"
      alt="ML Challenge"
      style={{ width: 60, height: 50 }}
    />,
    <img
      src="/events/Technovista2025/tv25-icons/guest_lecture.png"
      alt="Guest Lecture"
      style={{ width: 60, height: 60 }}
    />,
    <img
      src="/events/Technovista2025/tv25-icons/blogathon.png"
      alt="Blogathon"
      style={{ width: 75, height: 50 }}
    />,
    <img
      src="/events/Technovista2025/tv25-icons/code_fest.png"
      alt="Code Fest"
      style={{ width: 50, height: 40 }}
    />,
    <img
      src="/events/Technovista2025/tv25-icons/debug_or_die.png"
      alt="Debug or Die"
      style={{ width: 60, height: 50 }}
    />,
    <img
      src="/events/Technovista2025/tv25-icons/hackathon.png"
      alt="24Hr Hackathon"
      style={{ width: 60, height: 50 }}
    />,
    <img
      src="/events/Technovista2025/tv25-icons/workshop.png"
      alt="workshop"
      style={{ width: 60, height: 50 }}
    />,
  ];

  return (
    // for mobiles
    <>
      <div className="md:hidden w-full px-4 py-6 overflow-hidden relative">
        {/* Heading */}
        <div className="text-white text-3xl sm:text-4xl font-bold font-sans mb-4">
          <p>What can you</p>
          <p>expect?</p>
        </div>

        {/* Scrolling Wrapper */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex gap-4 animate-scroll-x"
            style={{ width: "max-content" }}
          >
            {[...icons, ...icons].map((icon, idx) => (
              <div
                key={idx}
                className="min-w-[200px] h-[180px] bg-[#FCFCFC] shadow-md rounded-lg relative flex items-end justify-start px-4 py-2"
                style={{
                  background: `${idx % 2 === 1 ? "#F7F7F7" : "#FCFCFC"}`,
                  boxShadow:
                    "0 0 5px 2px #daa42588, 0 2px 8px 0 rgba(0,0,0,0.08)",
                }}
              >
                {/* Top Text */}
                <div className="absolute top-3 right-3 text-end">
                  <div className="font-sans text-base font-semibold text-black">
                    {cardTexts[idx % cardTexts.length].title}
                  </div>
                  <div className="font-mono text-xs text-[#555]">
                    {cardTexts[idx % cardTexts.length].subtitle}
                  </div>
                </div>
                {/* Icon */}
                <div className="absolute bottom-3 left-3">{icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block mt-5 mb-5 px-2 sm:px-6">
        <div
          ref={containerRef}
          className="flex gap-8 sm:gap-16 md:gap-24 lg:gap-32 overflow-x-auto no-scrollbar"
          style={{
            height: "auto",
            alignItems: "center",
            paddingRight: "30vw", // extend scroll area to allow last card to center
          }}
        >
          <div className="min-w-[220px] sm:min-w-[300px] md:min-w-[350px] h-[180px] sm:h-[220px] md:h-[250px] ml-2 sm:ml-6 mt-4 sm:mt-6 flex flex-col items-start justify-center text-white text-left font-sans text-3xl sm:text-4xl md:text-5xl leading-snug font-bold">
            <p>What can you</p>
            <p>expect?</p>
          </div>

          {icons.map((icon, idx) => (
            <div
              key={idx}
              className={
                "group min-w-[180px] sm:min-w-[240px] md:min-w-[320px] h-[180px] sm:h-[220px] md:h-[250px]"
              }
              style={{
                background: `${idx === 1 ? "#F7F7F7" : "#FCFCFC"}`,
                boxShadow:
                  "0 0 5px 2px #daa42588, 0 2px 8px 0 rgba(0,0,0,0.08)",
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: "1rem",
                transition: "all 0.3s",
                ...(idx === icons.length - 1 ? { marginRight: "1rem" } : {}),
              }}
            >
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-end">
                <div className="font-sans text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-[#daa425]">
                  {cardTexts[idx].title}
                </div>
                <div className="font-mono text-xs sm:text-sm md:text-base transition-colors duration-300 group-hover:text-[#f2ca46]">
                  {cardTexts[idx].subtitle}
                </div>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                {icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhatToExpectTV;
