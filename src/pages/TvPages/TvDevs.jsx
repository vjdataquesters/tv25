import React from "react";
import NavbarTv from "../../components/TVComponents/NavbarTv";
import FooterTV from "../../components/TVComponents/FooterTV";

const developers = [
  {
    name: "Jagadeeswar",
    role: "WEB DEVELOPER",
    image: "/events/Technovista2025/devs/Jagadeeswar.png",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    name: "Pranav",
    role: "UI DESIGNER",
    image: "/events/Technovista2025/devs/Pranav.png",
    linkedin: "#",
  },
  {
    name: "Anish",
    role: "FRONTEND DEV",
    image: "/events/Technovista2025/devs/Anish.png",
    linkedin: "#",
  },
  {
    name: "Srishanth",
    role: "COORDINATOR",
    image: "/events/Technovista2025/devs/Srishanth.png",
    linkedin: "#",
  },
  {
    name: "Sipun",
    role: "BACKEND DEV",
    image: "/events/Technovista2025/devs/Sipun.png",
    linkedin: "#",
  },
];

const TvDevs = () => {
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
          {developers.map((dev, index) => (
            <div
              key={index}
              className="w-[220px] h-[340px] rounded-3xl bg-gradient-to-br from-[#daa425] to-[#f5c645] p-[3px] relative group transition-all duration-300 ease-in-out"
            >
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative">
                {/* Image here */}
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover rounded-3xl transition-all duration-500 ease-in-out group-hover:h-[180px]"
                />

                {/* On hovering */}
                <div className="absolute bottom-3 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {dev.name}
                  </h3>
                  <p className="text-xs text-[#daa425]">{dev.role}</p>
                  {dev.linkedin && (
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2"
                    >
                      <img
                        src="/icons/linkedin.svg"
                        alt="LinkedIn"
                        className="w-5 h-5 mx-auto hover:scale-110 transition"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterTV />
    </div>
  );
};

export default TvDevs;
