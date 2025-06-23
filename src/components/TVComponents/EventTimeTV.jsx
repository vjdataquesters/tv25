import React, { useState } from "react";
import day2Bg from "../../assets/designs/Layout.svg";
import Image from "/events/BlogAThon2023/img1.png";
import { useNavigate } from "react-router-dom";

function EventTimeTV() {
  const [buttonTexts, setButtonTexts] = useState({
    day1: "Register",
    day2: "Register",
    day3: "Register",
  });

  const navigate = useNavigate();

  const handleButtonClick = (dayKey) => {
    const dayNumber = {
      day1: 1,
      day2: 2,
      day3: 3,
    }[dayKey];

    if (dayNumber) {
      navigate("/technovista/events", {
        state: { day: dayNumber },
      });
    }
  };

  return (
    <div className="bg-black mx-auto md:w-2/3" id="event-time-line">
      <div className="py-8 pl-4 md:pl-8 bg-black pb-2">
        <span className="bg-yellow-400  px-4 md:px-6 text-xl md:text-3xl font-bold rounded-sm md:rounded-md">
          Event Timeline
        </span>
      </div>
      <hr className="border-t-2 border-white w-full" />

      <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3 md:p-6">
        {/* Day 1 */}
        <div className="relative w-full h-[500px] md:h-[600px] bg-black text-white font-mono flex justify-center">
          <img src={day2Bg} alt="Day 1 Background" className="h-full" />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl md:text-6xl font-bold tracking-widest text-white">
            DAY1
          </div>
          <img
            src={Image}
            alt=""
            className="absolute bottom-[55%] left-1/2 transform -translate-x-1/2 h-[100px] w-[150px] md:h-[150px] md:w-[200px] object-contain"
          />
          <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 w-[80%] p-2 rounded text-center">
            <div className="text-base md:text-xl">APRIL 25TH 2025</div>
          </div>
          <div className="absolute bottom-[3%] left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] lg:w-[50%] p-2 rounded text-center">
            <div>
              <ul className="list-disc mt-2 text-xs md:text-sm inline-block text-left">
                <li>Guest Lecture</li>
                <li>ML Challenge</li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => handleButtonClick("day1")}
                className="mt-2 md:mt-4 w-full max-w-[150px] md:max-w-[200px] bg-transparent border-2 border-yellow-400 text-yellow-400 text-sm md:text-base font-bold py-1 md:py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                {buttonTexts.day1}
              </button>
            </div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="relative w-full h-[500px] md:h-[600px] bg-black text-white font-mono flex justify-center">
          <img src={day2Bg} alt="Day 2 Background" className="h-full" />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl md:text-6xl font-bold tracking-widest text-white">
            DAY2
          </div>
          <img
            src={Image}
            alt=""
            className="absolute bottom-[55%] left-1/2 transform -translate-x-1/2 h-[100px] w-[150px] md:h-[150px] md:w-[200px] object-contain"
          />
          <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 w-[80%] p-2 rounded text-center">
            <div className="text-base md:text-xl">APRIL 26TH 2025</div>
          </div>
          <div className="absolute bottom-[1%] left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] lg:w-[50%] p-2 rounded text-center">
            <div>
              <ul className="list-disc mt-2 text-xs md:text-sm inline-block text-left">
                <li>Blogathon</li>
                <li>DQ Code Fest</li>
                <li>Debug or Die</li>
              </ul>
            </div>

            <div>
              <button
                onClick={() => handleButtonClick("day2")}
                className="mt-2 md:mt-4 w-full max-w-[150px] md:max-w-[200px] bg-transparent border-2 border-yellow-400 text-yellow-400 text-sm md:text-base font-bold py-1 md:py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                {buttonTexts.day2}
              </button>
            </div>
          </div>
        </div>

        {/* Day 3 */}
        <div className="relative w-full h-[500px] md:h-[600px] bg-black text-white font-mono flex justify-center">
          <img src={day2Bg} alt="Day 3 Background" className="h-full" />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl md:text-6xl font-bold tracking-widest text-white">
            DAY3
          </div>
          <img
            src={Image}
            alt=""
            className="absolute bottom-[55%] left-1/2 transform -translate-x-1/2 h-[100px] w-[150px] md:h-[150px] md:w-[200px] object-contain"
          />
          <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 w-[80%] p-2 rounded text-center">
            <div className="text-base md:text-xl">APRIL 27TH 2025</div>
          </div>
          <div className="absolute bottom-[1%] left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] lg:w-[50%] p-2 rounded text-center">
            <div>
              <ul className="list-disc mt-2 text-xs md:text-sm inline-block text-left">
                <li>24hr Hackathon</li>
                <li>Workshop</li>
              </ul>{" "}
            </div>
            <div>
              <button
                onClick={() => handleButtonClick("day3")}
                className="mt-2 md:mt-4 w-full max-w-[150px] md:max-w-[200px] bg-transparent border-2 border-yellow-400 text-yellow-400 text-sm md:text-base font-bold py-1 md:py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                {buttonTexts.day3}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventTimeTV;
