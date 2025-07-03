import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WhatWeGot from "../../components/TVComponents/WhatWeGot";
import Intro from "../../components/TVComponents/Intro";
import EventShowcase from "../../components/TVComponents/EventShowcase";
import Countdown from "../../components/TVComponents/CountDown";
import FooterTV from "../../components/TVComponents/FooterTV";
// import PastImages from "../../components/TVComponents/PastImages";
import "./Technovista.css";
import Sponsors from "../../components/TVComponents/Sponsors";
import NavbarTv from "../../components/TVComponents/NavbarTv";
import WhatToExpectTV from "../../components/TVComponents/WhatToExpectTV";
import ScrollingGallery from "../../components/TVComponents/ScrollingGallery";
import { gsap } from "gsap";

const Technovista = () => {
  const [introDone, setIntroDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const navigate = useNavigate();

  // Cursor refs
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight - rect.height * 0.6;
      const isInView = rect.top <= triggerPoint;
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleMouseMove = (e) => {
    if (cursorRef.current && cursorTrailRef.current) {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(cursorTrailRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    }
  };

  useEffect(() => {
    // Hide cursor on mobile
    if (isMobile) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      if (cursorTrailRef.current) cursorTrailRef.current.style.display = "none";
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg min-h-[250vh] relative">
      {/* Custom Cursor - only on desktop */}
      {!isMobile && (
        <>
          <div
            ref={cursorRef}
            className="fixed w-4 h-4 rounded-full bg-[#daa425] pointer-events-none z-[9999]"
            style={{
              mixBlendMode: "normal",
              transform: "translate(-50%, -50%)",
              left: 0,
              top: 0,
            }}
          />
          <div
            ref={cursorTrailRef}
            className="fixed w-8 h-8 rounded-full bg-[#daa425]/30 pointer-events-none z-[9998]"
            style={{
              mixBlendMode: "normal",
              transform: "translate(-50%, -50%)",
              left: 0,
              top: 0,
            }}
          />
        </>
      )}

      <Intro />

      {introDone && (
        <div className="relative z-10">
          <NavbarTv />
          <div className="flex flex-col pt-16">
            <WhatWeGot />

            <div
              ref={sectionRef}
              className="select-none flex flex-col items-center justify-center gap-12 pb-6"
            >
              <motion.div className="w-full px-4 py-2 flex flex-col items-center justify-center">
                <Countdown isVisible={isVisible} />
              </motion.div>
            </div>
            <div className="flex justify-center items-center mb-6">
              <button
                className="font-sans cta-button px-4 sm:px-6 py-2 sm:py-3  text-base sm:text-lg md:text-lg bg-[#daa425] text-black rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.5)] font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-all duration-300 ease-in-out"
                onClick={() => navigate("/technovista/register")}
              >
                Register Now
              </button>
            </div>
            <WhatToExpectTV />
            <EventShowcase />
            <Sponsors />
            <div>
              <section className="md:w-[90%] h-full mx-auto">
                <h4 className="font-bold text-center text-[40px] md:text-[30px] lg:text-[50px] text-white">
                  Technovista-2k24{" "}
                  <span className="text-[#daa425]">Glimpses</span>
                </h4>
                <div className="pt-4">
                  <div className="w-full mx-auto">
                    <ScrollingGallery />
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full overflow-hidden text-center select-none px-4 box-border">
              <h1 className="inline-block max-w-full text-[clamp(48px,14vw,230px)] leading-none font-bold text-amber-500/30 tracking-tight overflow-hidden">
                TECHNOVISTA
              </h1>
            </div>
            <FooterTV />
          </div>
        </div>
      )}
    </div>
  );
};

export default Technovista;
