import React, { useState, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const Intro = () => {
  const { scrollY } = useScroll();
  const [introDone, setIntroDone] = useState(false);
  const controls = useAnimation();

  const scale = useTransform(scrollY, [0, 300], [1, 3]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Automatically transition out intro after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      controls
        .start({
          scale: 3,
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        })
        .then(() => {
          setIntroDone(true);
        });
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [controls]);

  // Return null once intro is complete to remove from DOM
  if (introDone) return null;

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

  const letters = Array.from("TECHNOVISTA  2k25");

  return (
    <motion.div
      animate={controls}
      initial={{ scale: 1, opacity: 1 }}
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black z-50 overflow-hidden"
    >
      {/* Animated Title */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center z-10"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`font-semibold text-base md:text-7xl p-1 font-orbitron ${
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
