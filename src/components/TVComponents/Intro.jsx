import React, { useState, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const Intro = () => {
  const { scrollY } = useScroll();
  const [introDone, setIntroDone] = useState(false);
  const controls = useAnimation();
  const titleControls = useAnimation();

  const scale = useTransform(scrollY, [0, 300], [1, 3]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      // First animate in the letters
      await titleControls.start("visible");

      // Wait for letters to settle
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Then zoom out
      await controls.start({
        scale: 3,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      setIntroDone(true);
    };

    sequence();
  }, [controls, titleControls]);

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
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
  };

  const letters = Array.from("TECHNOVISTA  2k25");

  return (
    <motion.div
      animate={controls}
      initial={{ scale: 1, opacity: 1 }}
      style={{ scale, opacity }}
      className="fixed inset-0 flex items-center justify-center bg-black z-[9999] pointer-events-none"
    >
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={titleControls}
        className="flex flex-wrap items-center justify-center max-w-[90vw]"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`font-bold text-4xl md:text-7xl px-0.5 md:px-1 font-orbitron ${
              index >= 6 ? "text-amber-400" : "text-white"
            }`}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Intro;
