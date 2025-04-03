import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Countdown from "./CountDown";
import { Calendar } from "lucide-react";

function WhatWeGot() {
  const translations = [
    { lang: "English", text: " Technovista" },
    { lang: "Hindi", text: " टेक्नोविस्टा" },
    { lang: "Telugu", text: " టెక్నోవిస్తా" },
    { lang: "English", text: " Technovista" },
    { lang: "Odia", text: " ଟେକ୍ନୋଭିଷ୍ଟା" },
    { lang: "Kannada", text: " ಟೆಕ್ನೋವಿಸ್ಟಾ" },
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(translations[0].text);

 useEffect(() => {
  let charIndex = 0;
  const newText = translations[index].text;
  let currentText = ""; // Store the built-up text
  
  const typingEffect = setInterval(() => {
    if (charIndex < newText.length) {
      currentText += newText.charAt(charIndex);
      setDisplayedText(currentText);
      charIndex++;
    } else {
      clearInterval(typingEffect);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % translations.length);
      }, 1000); // Delay before switching languages
    }
  }, 150); // Typing speed

  return () => clearInterval(typingEffect);
}, [index]);

   const calculateTimeLeft = () => {
    const targetDate = new Date("April 13, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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
    <>
    <div className="bg-black min-h-screen flex py-20 justify-center px-4">
      <div className="flex flex-col items-center text-white font-bold text-6xl leading-tight">
      <span>
  WHAT{" "}
  <motion.span
    className="bg-gray-200 text-black px-2"
    initial={{ opacity: 0, scale: 0.5, y: -20 }}
    animate={{
      opacity: [1, 0.4, 1],
      scale: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }}
    whileHover={{ scale: 1.1 }}
  >
    WE'VE GOT
  </motion.span>
</span>

<span className="flex items-center gap-2">
  FOR{" "}
  <span className="text-white font-bold">
    {["Y", "O", "U"].map((letter, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ color: "#fff", scale: 1 }}
        animate={{
          color: ["#fff", "#facc15", "#fff"], // White -> Yellow -> White
          scale: [1, 1.5, 1], // Normal -> Bigger -> Normal
        }}
        transition={{
          duration: 0.6, // Animation duration
          repeat: Infinity, // Infinite loop
          repeatDelay: 1, // Pause between cycles
          delay: i * 0.5, // Delay for each letter (staggered effect)
        }}
      >
        {letter}
      </motion.span>
    ))}
  </span>
</span>



        {/* Animated Technovista */}
        <div className="pt-3 text-white text-5xl font-bold language-text">
  <motion.span
    key={displayedText}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="text-6xl sm:text-7xl md:text-8xl" // Increase font size dynamically
  >
    {displayedText} <span className="text-yellow-400">2K25</span>
  </motion.span>
</div>


        {/* Animated Paragraph */}
        <motion.p
          className="text-white text-base mt-4 max-w-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi perspiciatis amet voluptatibus nam, quo obcaecati doloremque recusandae beatae eos, architecto velit minus! Eos laborum dolorem fugiat debitis, aliquid suscipit! Veniam odio ad adipisci quod quis vitae dolorem, iure magnam?
        </motion.p>
      </div>

    </div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      
      {/* Countdown Section */}
      <div className="w-full flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center uppercase mb-6 bg-gradient-to-r from-yellow-400 to-yellow-700 text-transparent bg-clip-text">
         COUNTDOWN
        </h1>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="w-16 h-16 md:w-20 md:h-20 bg-black bg-opacity-50 border border-yellow-500 rounded-lg flex flex-col items-center justify-center shadow-lg backdrop-blur-md"
            >
              <span className="text-2xl md:text-3xl font-bold text-yellow-400">{value}</span>
              <span className="text-xs md:text-sm uppercase tracking-wide text-white">{unit}</span>
            </div>
          ))}
        </div>

        {/* Date Card */}
        <div className="mt-6 flex items-center justify-between w-full max-w-lg bg-yellow-500 text-black py-4 px-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            <p className="text-sm md:text-lg font-bold">
              <span className="text-gray-800">From:</span> <span className="text-black">Today</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            <p className="text-sm md:text-lg font-bold">
              <span className="text-gray-800">To:</span> <span className="text-black">13 Apr 2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default WhatWeGot;
