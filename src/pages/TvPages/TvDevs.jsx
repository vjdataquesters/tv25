import React, { useState, useEffect } from "react";
import NavbarTv from "../../components/TVComponents/NavbarTv";
import FooterTV from "../../components/TVComponents/FooterTV";
import { Linkedin, Github } from "lucide-react";

const developers = [
  {
    id: 1,
    name: "Praneesh",
    role: "Full Stack Developer",
    image: "/events/Technovista2025/devs/Praneesh.png",
    linkedin: "https://www.linkedin.com/in/parshipraneesh/",
    github: "https://github.com/PPraneesh",
    fullName: "Parshi Praneesh",
  },
  {
    id: 2,
    name: "Karthikeya",
    role: "Full Stack Developer",
    image: "/events/Technovista2025/devs/Karthikeya.png",
    linkedin: "https://www.linkedin.com/in/karthikeyaveruturi/",
    github: "https://github.com/karthikeyaspace/",
    fullName: "Karthikeya",
  },
  {
    id: 3,
    name: "Jagadeeswar",
    role: "Full Stack Developer",
    image: "/events/Technovista2025/devs/Jagadeeswar.png",
    linkedin: "https://www.linkedin.com/in/jagadeeswarj/",
    github: "https://github.com/JagadeeswarJ",
    fullName: "J. Jagadeeswar",
  },
  {
    id: 4,
    name: "Pranav",
    role: "Frontend Developer",
    image: "/events/Technovista2025/devs/Pranav.png",
    linkedin: "https://www.linkedin.com/in/pranav-babu-tungani-146707287/",
    github: "https://github.com/PranavBabuTungani",
    fullName: "T. Pranav Babu",
  },
  {
    id: 5,
    name: "Anish",
    role: "UI Designer",
    image: "/events/Technovista2025/devs/Anish.png",
    linkedin: "https://www.linkedin.com/in/anish-reddy2931/",
    github: "https://github.com/Anishs2931",
    fullName: "S. Anish Reddy",
  },
  {
    id: 6,
    name: "Srishanth",
    role: "Full Stack Developer",
    image: "/events/Technovista2025/devs/Srishanth.png",
    linkedin: "https://www.linkedin.com/in/padala-srishanth-4a0a4328b/",
    github: "https://github.com/Padala-Srishanth",
    fullName: "P.Srishanth",
  },
  {
    id: 7,
    name: "Sipun",
    role: "UI Designer",
    image: "/events/Technovista2025/devs/Sipun.png",
    linkedin: "https://www.linkedin.com/in/sipun-kumar-panda-8747b127b/",
    github: "#",
    fullName: "Sipun Kumar",
  },
];

const TvDevs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstRow = developers.filter((dev) => dev.id === 1 || dev.id === 2);
  const secondRow = developers.filter((dev) =>
    [3, 4, 5, 6, 7].includes(dev.id)
  );

  const renderDevCard = (dev, index) => {
    const isActive = activeIndex === index;

    return (
      <div
        key={dev.id}
        className="relative group"
        onClick={() => {
          if (isMobile) {
            setActiveIndex(index);
          }
        }}
      >
        {/* Main Card */}
        <div className="w-[220px] h-[340px] rounded-3xl bg-gradient-to-br from-[#daa425] to-[#f5c645] p-[3px] transition-all duration-300 ease-in-out shadow-lg shadow-[#daa425]/20 hover:shadow-xl hover:shadow-[#daa425]/30">
          <div className="w-full h-full bg-black rounded-3xl overflow-hidden flex flex-col">
            <div className="flex-1 relative">
              <img
                src={dev.image}
                alt={dev.name}
                className="w-full h-full object-cover rounded-t-3xl transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="p-4 text-center bg-black rounded-b-3xl">
              <h3 className="text-lg font-bold text-white tracking-wide">
                {dev.name}
              </h3>
              <p className="text-xs text-[#daa425] mb-2">{dev.role}</p>
              <div className="flex justify-center space-x-4 mt-2 md:hidden">
                {dev.linkedin && (
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#daa425] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {dev.github && (
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#daa425] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none scale-90 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 z-10 flex flex-col justify-center items-center text-center border border-[#daa425] shadow-2xl shadow-[#daa425]/30 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-6 transition-all duration-300 ease-in-out">
            <div className="w-[100px] h-[100px] bg-gradient-to-br from-[#daa425] to-[#f5c645] rounded-full flex justify-center items-center p-[2px] mb-4 shadow-md">
              <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-2 border-[#1a1a1a]">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#daa425] mb-1">
                {dev.fullName}
              </h3>
              <p className="text-sm text-white mb-1">{dev.role}</p>
            </div>

            <div className="flex gap-3">
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#daa425]/20 rounded-full flex items-center justify-center transition hover:bg-[#daa425]/40"
              >
                <Linkedin className="text-white text-xl" />
              </a>
              <a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#daa425]/20 rounded-full flex items-center justify-center transition hover:bg-[#daa425]/40"
              >
                <Github className="text-white text-xl" />
              </a>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarTv />

      <div className="pt-24 pb-16 px-6">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-center text-[#daa425]">
          Developed with 💛 by Our Team
        </h1>
        <p className="text-gray-400 text-lg text-center mt-2">
          Meet the creative minds behind Technovista 2K25
        </p>

        <div className="flex flex-wrap justify-center gap-10 mt-12 max-w-7xl mx-auto">
          {firstRow.map((dev, idx) => renderDevCard(dev, idx))}
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-10 max-w-7xl mx-auto">
          {secondRow.map((dev, idx) =>
            renderDevCard(dev, idx + firstRow.length)
          )}
        </div>
      </div>

      <FooterTV />
    </div>
  );
};

export default TvDevs;
