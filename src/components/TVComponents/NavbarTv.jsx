import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bars from "../../assets/bars.svg"; // Make sure this path is valid

function NavbarTv() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu after navigation
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50  border-b border-yellow-500/10 backdrop-blur-lg box-border">
      <div className="mx-auto max-w-screen px-3 sm:px-5 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logos and cross */}
          <div className="flex items-center space-x-3 gap-4">
            <a
              href="https://www.vjdataquesters.com/home"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/events/Technovista2025/tv25-icons/dq-vector.png"
                alt="Logo 1"
                className="h-[4rem] w-auto object-contain p-1"
              />
            </a>

            <a href="https://vnrvjiet.ac.in/" target="_blank" rel="noreferrer">
              <img
                src="/events/Technovista2025/tv25-icons/VNRVJIET-logo-files-03.png"
                alt="Logo 2"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Right: Desktop Links */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => handleNavigate("/technovista/events")}
              className="font-mono text-[#daa425] px-5 py-1.5 rounded-lg font-semibold hover:bg-[#121210] transition-all duration-300"
            >
              All Events
            </button>
            <a
              href="/technovista/devs"
              className="font-mono text-[#daa425] px-5 py-1.5 rounded-lg font-semibold hover:bg-[#121210] transition-all duration-300"
            >
              Developed by
            </a>
            <button
              onClick={() => handleNavigate("/technovista/register")}
              className="font-mono bg-[#daa425] text-black px-5 py-1.5 rounded-lg font-semibold hover:bg-[#f2ca46] transition-colors"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer" onClick={handleMenuToggle}>
            <img src={Bars} alt="Menu" className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {/* Mini Dropdown Box (Mobile Only) */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-4 max-w-[90vw] w-48 z-50 rounded-xl shadow-xl border border-yellow-500/10 backdrop-blur-lg bg-[#1a1a1a]">
          <div className="flex flex-col divide-y divide-yellow-500/10">
            <button
              onClick={() => handleNavigate("/technovista/events")}
              className="px-4 py-3 text-left font-mono text-white hover:text-yellow-400 transition-all"
            >
              All Events
            </button>
            <a
              href="/technovista/devs"
              className="px-4 py-3 text-left font-mono text-white hover:text-yellow-400 transition-all"
            >
              Developed by
            </a>
            <button
              onClick={() => handleNavigate("/technovista/register")}
              className="px-4 py-3 text-left font-mono text-white hover:text-yellow-400 transition-all"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarTv;
