import React, { useEffect } from "react";
import { motion } from "framer-motion";

const TechnovistaLayout = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Split text animation for the title
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
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

  const letters = Array.from("TECHNOVISTA");

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`text-7xl font-semibold md:text-5xl p-1 font-orbitron ${
                index >= 6 ? "text-amber-400" : "text-white"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechnovistaLayout;
