import React from "react";
import SponsorGfgTv from "./SponsorGfgTv";

function Sponsors() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Our <span className="text-[#daa425]">Sponsors</span>
        </h2>
        <p className="font-mono text-gray-300 mb-4 max-w-4xl mx-auto text-lg sm:text-xl">
          We extend our gratitude to the organizations supporting this event.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          {/* Sponsor 1 */}
          <SponsorGfgTv />

          {/* Sponsor 2 */}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
