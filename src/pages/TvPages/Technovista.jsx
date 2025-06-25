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
import Sponsors from "../../components/TVComponents/Sponsors";
import NavbarTv from "../../components/TVComponents/NavbarTv";

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
      // controls.start({ scale: 3, opacity: 0, transition: { duration: 1 } });
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
        <>
        <NavbarTv/>
          <div className="relative z-10 flex flex-col pt-10">
            <WhatWeGot />
            <div
              ref={sectionRef}
              className=" overflow-hidden select-none flex flex-col items-center justify-center gap-12 py-6"
            >
              {/* Countdown */}
              <motion.div
                variants={letterVariants}
                // initial="hidden"
                // animate={isVisible ? "visible" : "hidden"}
                className="w-full px-4 py-2 flex flex-col items-center justify-center"
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

            {/* <Sponsors /> */}
            {/*PastEvents Gallery Section */}
            <div>
              <section className="max-w-7xl md:max-w-[90%] h-full mx-auto">
                <h4 className="font-sans text-center text-[40px] md:text-[30px] lg:text-[50px] font-semibold text-white">
                  TV-2k24 <span className="text-[#daa425]">Glimpses</span>
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
        </>
      )}
    </div>
  );
};

export default Technovista;
