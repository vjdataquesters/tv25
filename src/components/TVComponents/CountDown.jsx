import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Countdown({ isVisible }) {
  const calculateTimeLeft = () => {
    const targetDate = new Date("July 31, 2025 09:30:00").getTime();

    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center max-w-7xl"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-8xl font-bold text-center mb-4 text-yellow-400"
              style={{
                textShadow: "0 2px 8px rgba(234, 179, 8, 0.3)",
              }}
            >
              COUNTDOWN
            </motion.h1>

            {/* Countdown Timer */}
          </motion.div>

          <div className="grid grid-cols-4 gap-6 md:gap-8 w-full">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.5,
                }}
                className="flex flex-col items-center justify-center"
              >
                <div className=" rounded-lg p-3 md:p-4 w-full aspect-square flex flex-col items-center justify-center">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-1">
                    {value.toString().padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-gray-400">
                    {unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Countdown;
