import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WhatWeGot from "../../components/TVComponents/WhatWeGot";
import Intro from "../../components/TVComponents/Intro";
import EventTimeTV from "../../components/TVComponents/EventTimeTV";
import Carousel3D from "../../components/TVComponents/CarouselTV";
import Countdown from "../../components/TVComponents/CountDown";
import FooterTV from "../../components/TVComponents/FooterTV";
import PastImages from "../../components/TVComponents/PastImages";
import "./Technovista.css";

const Technovista = () => {
  const [introDone, setIntroDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const titleVariants = {
    hidden: {
      opacity: 1,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: isMobile ? "20vh" : "35vh",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
      controls.start({ scale: 3, opacity: 0, transition: { duration: 1 } });
    }, 2000);
    return () => clearTimeout(timer);
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight - rect.height * 0.3;
      const isInView = rect.top <= triggerPoint;
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div className="bg-black min-h-[250vh] relative bg pt-10">
      <Intro />
      {introDone && (
        <div className="relative z-10 flex flex-col pt-10">
          <WhatWeGot />
          <div
            ref={sectionRef}
            className=" overflow-hidden select-none flex flex-col items-center justify-center gap-12 py-8"
          >
            <nav className="fixed top-0 left-0 w-full z-50 pt-2  border-b border-yellow-500/10 backdrop-blur-lg">
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                  {/* Left: Logos with "x" */}
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.vjdataquesters.com/home"
                      target="_blank"
                    >
                      <img
                        src="/events/Technovista2025/tv25-icons/dq-vector.png"
                        alt="Logo 1"
                        className="h-16 w-auto object-contain"
                      />
                    </a>
                    <div className="text-white opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 6l12 12M6 18L18 6"
                        />
                      </svg>
                    </div>

                    <a
                      href="https://vnrvjiet.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/events/Technovista2025/tv25-icons/VNRVJIET-logo-files-03.png"
                        alt="Logo 2"
                        className="h-10 w-auto object-contain"
                      />
                    </a>
                  </div>

                  {/* Right: Links */}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => navigate("/technovista/register")}
                      className="bg-yellow-500 text-black px-5 py-1.5 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            {/* Countdown */}
            <motion.div
              variants={letterVariants}
              // initial="hidden"
              // animate={isVisible ? "visible" : "hidden"}
              className="w-full px-4 py-4 flex flex-col items-center justify-center"
            >
              <Countdown isVisible={isVisible} />
            </motion.div>
          </div>

          {/* Carousel */}
          <motion.div
            variants={titleVariants}
            // initial="hidden"
            // animate={isVisible ? "visible" : "hidden"}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="w-full"
          >
            <Carousel3D />
          </motion.div>

          <EventTimeTV />

          <div className="bg-black/80 py-10 px-4 sm:px-6 lg:px-12">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Our <span className="text-yellow-500">Sponsors</span>
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                We extend our gratitude to the organizations supporting this
                event.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sponsor 1 */}
                <div className="bg-white/5 border border-yellow-500/20 backdrop-blur-lg p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 text-left">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-1">
                    Sponsor 1
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Pioneering the next-gen AI hardware solutions.
                  </p>
                </div>

                {/* Sponsor 2 */}
                <div className="bg-white/5 border border-yellow-500/20 backdrop-blur-lg p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 text-left">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-1">
                    Sponsor 2
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Leading cloud-native dev platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*PastEvents Gallery Section */}
          <div>
            <section className="max-w-7xl md:max-w-[90%] h-full mx-auto">
              <h4 className="text-center text-[40px] md:text-[30px] lg:text-[50px] font-semibold text-yellow-500 ">
                TV-2k24 Glimpses
              </h4>
              <div className="pt-4 pb-8">
                <div className="flex justify-center">
                  <div className="w-full max-w-6xl mx-auto">
                    <PastImages />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="w-screen  text-center select-none">
            <h1 className="text-[0px] sm:text-[100px] md:text-[130px] lg:text-[160px] xl:text-[230px] leading-none font-bold text-amber-500/30 tracking-wide">
              TECHNOVISTA
            </h1>
          </div>

          <FooterTV />
        </div>
      )}
    </div>
  );
};

export default Technovista;
