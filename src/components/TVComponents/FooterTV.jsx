import React from "react";
import { FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import "./TvComponents.css";

const FooterTV = () => {
  return (
    <footer className="relative bg-black text-white w-full overflow-hidden border-t border-yellow-400/30">
      {/* Top golden horizontal shimmer line */}
      <div className="absolute top-0 left-0 w-full">
        <div className="golden-line-horizontal top-line"></div>
      </div>

      {/* Background image (blurred and dimmed) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(Map.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          filter: "brightness(0.5) contrast(1.2)",
          transform: "scale(1.1)",
        }}
      />

      {/* Animated floating golden lines and threads */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className={`golden-line-${n}`}></div>
        ))}

        <div className="golden-thread-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`golden-thread thread-${i}`} />
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 w-full px-2 sm:px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-none px-2 sm:px-4 md:px-12 gap-6">
          {/* --- Contact Section --- */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 relative flex flex-col items-center text-center p-4 sm:p-6">
            <div className="golden-corner-top-left" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-yellow-400">
              Contact Us
            </h2>
            <div className="text-white space-y-1 sm:space-y-2 text-center lg:text-left w-full">
              <p className="text-sm sm:text-base md:text-lg">
                <span className="font-semibold text-yellow-400">Email:</span>{" "}
                vjdataquesters@gmail.com
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                <span className="font-semibold text-yellow-400">Phone:</span>{" "}
                +91 93467 06032
              </p>
              <div className="flex flex-col items-center lg:items-start justify-center space-y-1 sm:space-y-2 mt-2">
                <p className="text-sm sm:text-base md:text-lg">VNR VJIET</p>
                <p className="text-sm sm:text-base md:text-lg">Bachupally</p>
                <p className="text-sm sm:text-base md:text-lg">Hyderabad</p>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mt-4">
              <a
                href="https://www.instagram.com/vjdataquesters.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transform transition-transform hover:scale-110"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/vj-data-questers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transform transition-transform hover:scale-110"
              >
                <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transform transition-transform hover:scale-110"
              >
                <FaGlobe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            </div>
            <div className="golden-corner-bottom-right" />
          </div>

          {/* --- Quick Links Section --- */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 relative flex flex-col items-center text-center p-4 sm:p-6">
            <div className="golden-corner-top-left" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-yellow-400">
              Quick Links
            </h2>
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 gap-3 sm:gap-4 w-full max-w-xs">
                <a
                  href="/about"
                  target="_blank"
                  className="text-sm sm:text-base md:text-lg hover:text-yellow-400 transform transition-all duration-300 hover:translate-x-1 text-center"
                >
                  About Us
                </a>
                <a
                  href="/technovista/events"
                  target="_blank"
                  className="text-sm sm:text-base md:text-lg hover:text-yellow-400 transform transition-all duration-300 hover:translate-x-1 text-center"
                >
                  Events
                </a>
                <a
                  href="#event-time-line"
                  className="text-sm sm:text-base md:text-lg hover:text-yellow-400 transform transition-all duration-300 hover:translate-x-1 text-center"
                >
                  Schedule
                </a>
                <a
                  href="/technovista/register"
                  className="text-sm sm:text-base md:text-lg hover:text-yellow-400 transform transition-all duration-300 hover:translate-x-1 text-center"
                >
                  Register
                </a>
              </div>
            </div>
            <div className="golden-corner-bottom-right" />
          </div>

          {/* --- Location / Map Section --- */}
          <div className="w-full lg:w-1/3 relative flex flex-col items-center text-center p-4 sm:p-6">
            <div className="golden-corner-top-left" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-yellow-400">
              Location
            </h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-[#daa425] shadow-md max-w-md mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11075.568485372974!2d78.3888612092676!3d17.539494326822695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab28e0975%3A0x7b048b2858fdee94!2sVallurupalli%20Nageswara%20Rao%20Vignana%20Jyothi%20Institute%20of%20Engineering%20%26Technology!5e0!3m2!1sen!2sin!4v1750646504693!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/69xL8NXPXzC3zQPk8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 rounded-lg border border-[#daa425] text-[#f2ca46] font-medium text-sm sm:text-base hover:bg-[#daa425] hover:text-black transition duration-300 shadow-md"
            >
              Open in Google Maps →
            </a>

            <div className="golden-corner-bottom-right" />
          </div>
        </div>

        {/* --- Footer Bottom Copyright */}
        <div className="text-center mt-6 pt-4 w-full relative">
          <div className="golden-line-horizontal mb-4" />
          <p className="text-sm sm:text-base md:text-lg mt-3 text-yellow-400/80">
            © 2025 TechnoVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTV;
