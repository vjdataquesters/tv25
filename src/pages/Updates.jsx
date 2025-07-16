import React from "react";
import NavbarTv from "../components/NavbarTv"; 

const updates = [
  {
    date: "4th July 2025",
    title: "Registrations Opened",
    description: "Participant registrations officially began. Join us in the tech celebration!",
  },
  {
    date: "14th July 2025",
    title: "Hackathon Registrations Live",
    description: "Hackathon registrations and problem statements are now live. Form your dream team!",
  },
  {
    date: "16th July 2025",
    title: "CodeFest Registrations",
    description: "CodeFest registration gates are now open. Prepare to outcode the best!",
  },
];

export default function UpdatesSection() {
  return (
    <>
      <NavbarTv />
      <div className="min-h-screen px-6 py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10 text-center tracking-widest drop-shadow-lg">
            🔔 Latest Updates
          </h2>
          <div className="space-y-8">
            {updates.map((update, index) => (
              <div
                key={index}
                className="border-l-4 border-yellow-500 pl-6 py-4 hover:bg-[#1a1a1a] rounded transition-all duration-300 shadow-md"
              >
                <p className="text-sm text-yellow-300 uppercase tracking-wider mb-1">
                  {update.date}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {update.title}
                </h3>
                <p className="text-gray-300">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
