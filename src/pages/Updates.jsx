import React from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import NavbarTv from "../components/NavbarTv";
import Reveal from "../components/Reveal";

export default function UpdatesSection() {
  const navigate = useNavigate();

  const updates = [
    {
      date: "4th July 2025",
      title: "Registrations Opened",
      description:
        "Participant registrations officially began. Join us in the tech celebration!",
      handler: () => navigate("/technovista/register"),
    },
    {
      date: "14th July 2025",
      title: "Hackathon Registrations Live",
      description:
        "Hackathon registrations and problem statements are now live. Form your dream team!",
      handler: () => navigate("/technovista/events/hackathon"),
    },
    {
      date: "16th July 2025",
      title: "CodeFest Registrations",
      description:
        "CodeFest registration are now open. Prepare to outcode the best!",
      handler: () =>
        navigate("/technovista/events", {
          state: {
            title: "DQ Code Fest"
          },
        }),
    },
  ];

  return (
    <>
      <NavbarTv />
      <div className="min-h-screen px-4 sm:px-6 py-16 sm:py-24 bg-black text-white">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-6 sm:mb-8 md:mb-10 text-center tracking-widest drop-shadow-lg">
              🔔 Latest Updates
            </h2>
          </Reveal>
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {updates.slice().reverse().map((update, index) => (
              <Reveal key={index}>
                <div className="border-l-4 border-yellow-500 pl-4 sm:pl-6 py-3 sm:py-4 rounded shadow-md relative">
                  <p className="text-xs sm:text-sm text-yellow-300 uppercase tracking-wider mb-1">
                    {update.date}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                      {update.title}
                    </h3>
                    <button
                      onClick={update.handler}
                      className="flex items-center gap-1 text-xs sm:text-sm text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 px-2 py-1 rounded transition-all duration-200"
                    >
                      <span>View</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300">
                    {update.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
