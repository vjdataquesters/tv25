import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

function WhatWeGot() {
  const translations = [
    { lang: "English", text: " Technovista" },
    { lang: "Hindi", text: " टेक्नोविस्टा" },
    { lang: "Telugu", text: " టెక్నోవిస్తా" },
    { lang: "Odia", text: " ଟେକ୍ନୋଭିଷ୍ଟା" },
    { lang: "Kannada", text: " ಟೆಕ್ನೋವಿಸ್ಟಾ" },
    { lang: "Tamil", text: " டெக்னோவிஸ்டா" },
    { lang: "Malayalam", text: " ടെക്നോവിസ്റ്റ" },
  ];

  const stats = [
    {
      icon: "fas fa-user-graduate",
      title: "600+ Participants",
      desc: "Over 600+ participants",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "10+ Events",
      desc: "2 years of successful execution",
    },
    {
      icon: "fas fa-award",
      title: "1.45 Lakh Prize Pool",
      desc: "Prizes worth up to 1.45 Lakh",
    },
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(translations[0].text);

  useEffect(() => {
    let charIndex = 0;
    const newText = translations[index].text;
    let currentText = "";

    const typingEffect = setInterval(() => {
      if (charIndex < newText.length) {
        currentText += newText.charAt(charIndex);
        setDisplayedText(currentText);
        charIndex++;
      } else {
        clearInterval(typingEffect);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % translations.length);
        }, 500);
      }
    }, 150);

    return () => clearInterval(typingEffect);
  }, [index]);

  return (
    <div className="min-h-screen bg-none overflow-hidden px-4 pt-20 md:pt-0 flex flex-col items-center justify-center text-white text-center">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
        WHAT WE'VE GOT FOR YOU
      </h1>
      <motion.span
        className="text-4xl sm:text-6xl md:text-7xl font-bold text-yellow-400"
        animate={{ scale: [1, 1, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        {displayedText} 2K25
      </motion.span>
      <section className="mt-8 bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-500/20 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-4 tracking-wide">
          The Ultimate Tech Carnival
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Gear up for the{" "}
          <span className="text-yellow-400 font-semibold">second edition</span>{" "}
          of the most electrifying tech fest of the year —{" "}
          <span className="font-bold text-white">TechnoVista 2K25</span>, hosted
          by <span className="text-white">VJ DataQuesters</span>! This 3-day
          extravaganza fuses cutting-edge innovation, relentless challenges, and
          limitless creativity. From{" "}
          <span className="text-yellow-300">Hackathons</span> to{" "}
          <span className="text-yellow-300">Debug Challenges</span>,{" "}
          <span className="text-yellow-300">Workshops</span> to{" "}
          <span className="text-yellow-300">Tech Talks</span> — there’s
          something for every tech enthusiast!
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
          <span className="font-medium text-yellow-400">
            Decode. Discover. Disrupt.
          </span>
        </p>
      </section>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 mt-8 md:mt-12 w-full max-w-6xl"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-8 bg-gray-800 rounded-lg shadow-lg"
            style={{ flex: "1 1 30%", margin: "5px" }}
          >
            <i
              className={`${stat.icon} text-6xl sm:text-7xl mb-6 text-yellow-400 animate-pulse`}
            ></i>
            <div className="font-bold text-xl sm:text-2xl text-white">
              {stat.title}
            </div>
            <div className="text-sm sm:text-lg text-gray-400 mt-2">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeGot;
