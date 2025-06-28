import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Intro = ({ onFinish }) => {
  const [introDone, setIntroDone] = useState(false);
  const controls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    const sequence = async () => {
      await titleControls.start("visible");
      await new Promise((resolve) => setTimeout(resolve, 500));
      await controls.start({
        scale: 3,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      // Re-enable scroll
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
        className="flex flex-wrap items-center justify-center max-w-[90vw]"
      >
        {/* Main letters wrap normally */}
        {mainLetters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`font-bold text-3xl sm:text-5xl md:text-7xl px-0.5 sm:px-1 md:px-2 font-orbitron ${
              index >= 6 ? "text-amber-400" : "text-white"
            }`}
          >
            {letter}
          </motion.span>
        ))}
        <motion.div className="w-full sm:w-auto flex justify-center whitespace-nowrap mt-2 sm:mt-0">
          {tailLetters.map((letter, idx) => (
            <motion.span
              key={`tail-${idx}`}
              variants={letterVariants}
              className="font-bold text-2xl sm:text-4xl md:text-7xl px-0.5 sm:px-1 md:px-2 text-amber-400 font-orbitron"
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
