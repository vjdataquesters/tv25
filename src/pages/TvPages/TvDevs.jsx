import React from "react";
import NavbarTv from "../../components/TVComponents/NavbarTv";
import FooterTV from "../../components/TVComponents/FooterTV";
import { Linkedin, Github } from "lucide-react";

const developers = [
  {
    id: 6,
    name: "Praneesh",
    role: "DEV",
    image: "/events/Technovista2025/devs/Sipun.png",
    linkedin: "https://www.linkedin.com/in/parshipraneesh/",
    github: "https://github.com/PPraneesh",
    fullName: "Parshi Praneesh",
    location: "Hyderabad, India"
  },
  {
    id: 7,
    name: "Karthikeya",
    role: "DEV",
    image: "/teamImages/me.png",
    linkedin: "https://www.linkedin.com/in/karthikeyaveruturi/",
    github: "https://github.com/karthikeyaspace/",
    fullName: "Karthikeya",
    location: "Bhubaneswar, India"
  },
  {
    id: 1,
    name: "Jagadeeswar",
    role: "WEB DEVELOPER",
    image: "/events/Technovista2025/devs/Jagadeeswar.png",
    linkedin: "https://www.linkedin.com/in/jagadeeswarj/",
    github: "https://github.com/JagadeeswarJ",
    fullName: "J. Jagadeeswar",
    location: "Hyderabad, India"
  },
  {
    id: 2,
    name: "Pranav",
    role: "Frontend DEV",
    image: "/events/Technovista2025/devs/Pranav.png",
    linkedin: "https://www.linkedin.com/in/pranav-babu-tungani-146707287/",
    github: "https://github.com/PranavBabuTungani",
    fullName: "T. Pranav Babu",
    location: "Hyderabad, India"
  },
  {
    id: 3,
    name: "Anish",
    role: "UI Designer",
    image: "/events/Technovista2025/devs/Anish.png",
    linkedin: "https://www.linkedin.com/in/anish-reddy2931/",
    github: "https://github.com/Anishs2931",
    fullName: "S. Anish Reddy",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    name: "Srishanth",
    role: "Full Stack DEV",
    image: "/events/Technovista2025/devs/Srishanth.png",
    linkedin: "https://www.linkedin.com/in/padala-srishanth-4a0a4328b/",
    github: "https://github.com/Padala-Srishanth",
    fullName: "P.Srishanth",
    location: "Hyderabad, India"
  },
  {
    id: 5,
    name: "Sipun",
    role: "DEV",
    image: "/events/Technovista2025/devs/Sipun.png",
    linkedin: "https://www.linkedin.com/in/sipun-kumar-panda-8747b127b/",
    github: "#",
    fullName: "Sipun Kumar",
    location: "Bhubaneswar, India"
  },
];

const TvDevs = () => {
  const firstRow = developers.filter(dev => dev.id === 6 || dev.id === 7);
  const secondRow = developers.filter(dev => [1,2,3,4,5].includes(dev.id));

  // Card rendering function to avoid repetition
  const renderDevCard = (dev, index) => (
    <div key={dev.id} className="relative group">
      {/* Main Card */}
      <div className="w-[220px] h-[340px] rounded-3xl bg-gradient-to-br from-[#daa425] to-[#f5c645] p-[3px] relative transition-all duration-300 ease-in-out 
        shadow-lg shadow-[#daa425]/20 hover:shadow-xl hover:shadow-[#daa425]/30">
        <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative flex flex-col">
          {/* Photo */}
          <div className="flex-1 relative">
            <img
              src={dev.image}
              alt={dev.name}
              className="w-full h-full object-cover rounded-t-3xl transition-all duration-500 ease-in-out"
            />
          </div>
          {/* Info Section with Social Links */}
          <div className="p-4 text-center bg-black rounded-b-3xl">
            <h3 className="text-lg font-bold text-white tracking-wide">
              {dev.name}
            </h3>
            <p className="text-xs text-[#daa425] mb-2">{dev.role}</p>
            {/* Social Links - Hidden on desktop, shown on mobile */}
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
      {/* Info Card (hidden by default) */}
      <div className="info-card absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-6 opacity-0 pointer-events-none transition-all duration-300 ease-in-out z-10 flex flex-col justify-center items-center text-center border border-[#daa425]
        shadow-2xl shadow-[#daa425]/30 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:transform group-hover:scale-100">
        <div className="info__border mb-4">
          <div className="info__perfil">
            <img 
              src={dev.image} 
              alt={dev.name} 
              className="info__img rounded-full"
            />
          </div>
        </div>
        <div className="info__data mb-4">
          <h3 className="info__name text-xl font-bold text-[#daa425] mb-1">
            {dev.fullName}
          </h3>
          <p className="info__profession text-sm text-white mb-1">
            {dev.title}
          </p>
          <p className="info__location text-xs text-gray-400">
            {dev.location}
          </p>
        </div>
        <div className="info__social flex gap-3">
          <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="info__social-link">
            <Linkedin className="text-white text-xl" />
          </a>
          <a href={dev.github} target="_blank" rel="noopener noreferrer" className="info__social-link">
            <Github className="text-white text-xl" />
          </a>
        </div>
        <button 
          className="absolute top-3 right-3 text-gray-400 hover:text-[#daa425] transition-colors md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            document.querySelectorAll('.info-card')[index].classList.remove('active');
          }}
        >
          <i className="ri-close-line text-xl"></i>
        </button>
      </div>
    </div>
  );

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

        {/* First Row: 6, 7 */}
        <div className="flex flex-wrap justify-center gap-10 mt-12 max-w-7xl mx-auto">
          {firstRow.map((dev, idx) => renderDevCard(dev, idx))}
        </div>
        {/* Second Row: 1, 2, 3, 4, 5 */}
        <div className="flex flex-wrap justify-center gap-10 mt-10 max-w-7xl mx-auto">
          {secondRow.map((dev, idx) => renderDevCard(dev, idx + firstRow.length))}
        </div>
      </div>

      <FooterTV />

      <style jsx global>{`
        /* Base styles with enhanced shadows */
        .info-card {
          transform: scale(0.9);
          box-shadow: 0 10px 25px rgba(218, 164, 37, 0.3);
        }
        
        .info-card.active {
          opacity: 1;
          pointer-events: auto;
          transform: scale(1);
          box-shadow: 0 15px 30px rgba(218, 164, 37, 0.4);
        }
        
        .info__border {
          width: 100px;
          height: 100px;
          background: linear-gradient(145deg, #daa425, #f5c645);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px;
          box-shadow: 0 4px 8px rgba(218, 164, 37, 0.3);
        }
        
        .info__perfil {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #1a1a1a;
        }
        
        .info__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .info__social-link {
          width: 36px;
          height: 36px;
          background: rgba(218, 164, 37, 0.2);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .info__social-link:hover {
          background: rgba(218, 164, 37, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(218, 164, 37, 0.3);
        }
        
        /* Show social links on main card only on mobile */
        @media (min-width: 768px) {
          .info-card {
            opacity: 0;
            pointer-events: none;
          }
          
          .group:hover .info-card {
            opacity: 1;
            pointer-events: auto;
            transform: scale(1);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .info-card {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.9);
            width: 90%;
            max-width: 300px;
            max-height: 90vh;
            z-index: 100;
            opacity: 0;
            pointer-events: none;
          }
          
          .info-card.active {
            opacity: 1;
            pointer-events: auto;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default TvDevs;