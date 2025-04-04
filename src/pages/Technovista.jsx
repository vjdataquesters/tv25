import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import WhatWeGot from "../components/TVComponents/WhatWeGot";
import Intro from "../components/TVComponents/Intro";
import EventTimeTV from "../components/TVComponents/EventTimeTV";

const Technovista = () => {
  const { scrollY } = useScroll();
  const [introDone, setIntroDone] = useState(false);
  const controls = useAnimation();

  const scale = useTransform(scrollY, [0, 300], [1, 3]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const letters = Array.from("TECHNOVISTA     2k25");

  // Delay before triggering scroll-based transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
      controls.start({ scale: 3, opacity: 0, transition: { duration: 1 } });
    }, 2000); // wait for 2 seconds
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div className="bg-black min-h-[200vh] relative">
      {/* Intro Section */}
      <Intro />

      {introDone && (
        <div className="relative z-10">
          <WhatWeGot />
          <EventTimeTV />
        </div>
      )}
    </div>
  );
};

export default Technovista;
