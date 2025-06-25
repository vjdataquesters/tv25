import React from "react";

function Sponsors() {
  return (
    <div className="bg-black/80 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Our <span className="text-[#daa425]">Sponsors</span>
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
          We extend our gratitude to the organizations supporting this event.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Sponsor 1 */}
          <div className="bg-white/5 border border-yellow-500/20 backdrop-blur-lg p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 text-left">
            <h3 className="text-lg font-semibold text-[#daa425] mb-1">
              Sponsor 1
            </h3>
            <p className="text-gray-300 text-sm">
              Pioneering the next-gen AI hardware solutions.
            </p>
          </div>

          {/* Sponsor 2 */}
          <div className="bg-white/5 border border-yellow-500/20 backdrop-blur-lg p-4 rounded-xl shadow hover:scale-105 transition-all duration-300 text-left">
            <h3 className="text-lg font-semibold text-[#daa425] mb-1">
              Sponsor 2
            </h3>
            <p className="text-gray-300 text-sm">
              Leading cloud-native dev platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
