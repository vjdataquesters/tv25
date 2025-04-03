import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

function Countdown() {
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
  );
}

export default Countdown;
