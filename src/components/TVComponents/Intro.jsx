import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Intro = ({ onFinish }) => {
  const [introDone, setIntroDone] = useState(false);
  const controls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const sequence = async () => {
      await titleControls.start("visible");
      await new Promise((resolve) => setTimeout(resolve, 500));
      await controls.start({
        scale: 3,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      document.body.style.overflow = "auto";
      setIntroDone(true);
      if (onFinish) onFinish();
    };

    sequence();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [controls, titleControls, onFinish]);

  if (introDone) return null;

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  const letters = Array.from("TECHNOVISTA  2k25");
  const mainLetters = letters.slice(0, letters.length - 4);
  const tailLetters = letters.slice(-4);

  return (
    <motion.div
      animate={controls}
      initial={{ scale: 1, opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-[9999] pointer-events-none"
    >
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={titleControls}
        className="flex flex-col items-center justify-center gap-4 text-center"
      >
        {/* Logo */}
        <motion.img
          src="/events/Technovista2025/tv25-icons/tv-logo-ani.gif"
          className="h-40 sm:h-56 md:h-72 drop-shadow-2xl"
        />

        {/* TECHNOVISTA word in one line */}
        <motion.div className="flex flex-row justify-center whitespace-nowrap">
          {mainLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`font-extrabold text-3xl sm:text-5xl md:text-7xl px-1 font-orbitron ${
                index >= 6 ? "text-amber-400" : "text-white"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* 2k25 word in one line */}
        <motion.div className="flex flex-row justify-center whitespace-nowrap">
          {tailLetters.map((letter, idx) => (
            <motion.span
              key={`tail-${idx}`}
              variants={letterVariants}
              className="font-bold text-2xl sm:text-4xl md:text-7xl px-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 font-orbitron animate-pulse"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
