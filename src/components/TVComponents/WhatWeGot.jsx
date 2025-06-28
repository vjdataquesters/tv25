import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

function WhatWeGot() {
  const translations = [
    { lang: "English", text: " Technovista" },
    { lang: "Hindi", text: " टेक्नोविस्टा" },
    { lang: "Telugu", text: " టెక్నోవిస్తా" },
    { lang: "Malayalam", text: " ടെക്നോവിസ്റ്റ" },
  ];

  const stats = [
    {
      icon: "fas fa-user-graduate",
      title: "600+ Participants",
      desc: "Where Hyderabad's Brightest Minds Converge to Code, Create, and Conquer!",
      highlight: "from 10+ colleges",
      color: "from-amber-500/20 to-amber-600/10",
      border: "border-amber-500/30",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "8 Events",
      desc: "Diverse events spanning workshops, lectures, competitions, and a 24-hour hackathon",
      highlight: "3 days of non-stop action",
      color: "from-purple-500/20 to-purple-600/10",
      border: "border-purple-500/30",
    },
    {
      icon: "fas fa-award",
      title: "65K+ Prize Pool",
      desc: "Exciting rewards for top performers",
      highlight: "across all events",
      color: "from-blue-500/20 to-blue-600/10",
      border: "border-blue-500/30",
    },
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(translations[0].text);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let currentText = "";
    let timeoutId;
    const fullText = translations[index].text;

    const typeEffect = () => {
      if (!isDeleting) {
        currentText = fullText.substring(0, charIndex + 1);
        setDisplayedText(currentText);
        charIndex++;

        if (charIndex === fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeEffect, 900);
          return;
        }
      } else {
        currentText = fullText.substring(0, charIndex - 1);
        setDisplayedText(currentText);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          setIndex((prevIndex) => (prevIndex + 1) % translations.length);
          timeoutId = setTimeout(typeEffect, 300);
          return;
        }
      }

      timeoutId = setTimeout(typeEffect, 100);
    };

    timeoutId = setTimeout(typeEffect, 100);

    return () => clearTimeout(timeoutId);
  }, [index]);

  const isMalayalam = translations[index].lang === "Malayalam";

  return (
    <div className="min-h-screen bg-none overflow-hidden px-4 pt-4 flex flex-col items-center justify-center text-white text-center select-none">
      {" "}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold my-4 leading-tight font-mono">
        WHAT WE'VE GOT FOR YOU
      </h1>
      <motion.span
        className={`
        inline-block text-center break-words leading-tight max-w-full px-2 font-bold text-[#daa425] pt-2
        ${
          isMalayalam
            ? "text-2xl sm:text-5xl md:text-7xl"
            : "text-4xl sm:text-6xl md:text-7xl"
        }
      `}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}&nbsp;2K25
      </motion.span>
      {/*sponsor section */}
      <div className="mt-4 md:mt-8 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-visible">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
            className={`relative rounded-xl overflow-hidden p-0.5 bg-gradient-to-br ${stat.color}`}
          >
            <div
              className={`relative bg-black/70 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center justify-center border ${stat.border}`}
            >
              {/* Animated icon with gradient */}
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.color} blur-md opacity-70`}
                ></div>
                <i
                  className={`${stat.icon} text-4xl sm:text-5xl relative z-10 text-[#daa425]`}
                />
              </div>

              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-2">
                {stat.title}
              </h3>

              <p className="font-mono text-sm sm:text-base text-gray-300 mb-3">
                {stat.desc}
              </p>

              <p className="font-mono text-xs sm:text-sm font-medium bg-gradient-to-r from-[#daa425] to-[#f2ca46] bg-clip-text text-transparent">
                {stat.highlight}
              </p>

              {/* Animated border effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <section className="from-yellow-900/20 to-black/50  rounded-xl p-6 sm:p-8 my-6 max-w-[90%] md:max-w-6xl w-full text-left">
        <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#daa425] mb-4 tracking-wide">
          The Ultimate Tech Carnival
        </h2>
        <p className="font-mono text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          The annual technical fest{" "}
          <span className="font-bold text-white">“TechnoVista”</span> is a
          flagship initiative organized by the{" "}
          <span className="text-[#daa425] font-semibold">
            Data Science Branch of CSE – (CyS, DS)
          </span>{" "}
          <span className="text-[#daa425] font-semibold">
            and the AI&amp;DS Department of VNRVJIET
          </span>
          . Since its inception, it has emerged as a high-energy platform that
          blends <span className="text-[#daa425]">innovation</span>,{" "}
          <span className="text-[#daa425]">skill</span>, and{" "}
          <span className="text-[#daa425]">creativity</span>. The{" "}
          <span className="text-white font-semibold">2025 edition</span>,
          scheduled from{" "}
          <span className="text-white">July 31st to August 2nd</span>, showcases{" "}
          <span className="text-white font-semibold">8 exciting events</span>{" "}
          including{" "}
          <span className="text-[#daa425]">machine learning challenges</span>, a{" "}
          <span className="text-[#daa425]">creative blogathon</span>,{" "}
          <span className="text-[#daa425]">data science problem-solving</span>,
          a <span className="text-[#daa425]">coding contest</span>,{" "}
          <span className="text-[#daa425]">hands-on workshops</span>,{" "}
          <span className="text-[#daa425]">expert guest lectures</span>, and a
          thrilling <span className="text-[#daa425]">24-hour hackathon</span>.
          With{" "}
          <span className="text-white font-semibold">
            600+ tech enthusiasts
          </span>{" "}
          expected,{" "}
          <span className="font-bold text-white">TechnoVista 2K25</span>{" "}
          promises a vibrant confluence of{" "}
          <span className="text-[#daa425]">ideas</span>,{" "}
          <span className="text-[#daa425]">competition</span>, and{" "}
          <span className="text-[#daa425]">collaboration</span> — celebrating
          the spirit of technology like never before.
        </p>
      </section>
      {/* stats Section */}
    </div>
  );
}

export default WhatWeGot;
