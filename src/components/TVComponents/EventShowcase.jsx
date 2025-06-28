import { useState } from "react";
import { Calendar, ExternalLink } from "lucide-react";
import { eventTimeLine } from "../../data/tvData";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Flatten all events
const allEvents = eventTimeLine.flatMap((day) => day.events);

export default function EventShowcase() {
  const [activeEvent, setActiveEvent] = useState(allEvents[0]);
  const navigate = useNavigate();
  return (
    <div className="w-full bg text-white font-mono max-w-7xl mx-auto px-4">
      <h2 className="font-sans text-4xl sm:text-5xl font-semibold text-white mb-4 py-5">
        Featured <span className="text-[#daa425]">Events</span>
      </h2>

      {/* Desktop View */}
      <div className="hidden lg:flex border border-white/10">
        {/* Left: Event List */}
        <div className="w-3/5 border-r border-white/10 overflow-y-auto">
          {allEvents.map((event) => {
            const isActive = activeEvent.id === event.id;
            return (
              <div
                key={event.id}
                onMouseEnter={() => setActiveEvent(event)}
                className={`group border-b border-white/10 cursor-pointer
                            flex justify-between items-start gap-4 px-4
                            text-white/40 hover:bg-white/20
                            transition-all duration-300 ease-in-out
                            h-[68px]
                            overflow-hidden relative
                            ${isActive ? "text-white h-[75px]" : ""}
                            last:border-b-0
                          `}
              >
                {/* Left: Title and Subtitle */}
                <div className="flex flex-col justify-center font-sans transition-all duration-300 ease-in-out py-2">
                  <h3
                    className={`text-lg mt-1 transition-all duration-300 ease-in-out ${
                      isActive
                        ? "translate-y-[4px] text-white font-semibold"
                        : "group-hover:translate-y-0 translate-y-[4px] font-light"
                    }`}
                  >
                    {event.title}
                  </h3>

                  <p
                    className={`text-sm text-white/60 leading-tight mt-1 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    } transition-all duration-300 ease-in-out`}
                  >
                    {event.subtitle}
                  </p>
                </div>

                {/* Right: Date and Register — only if active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex flex-col justify-center gap-y-1 font-mono text-xs text-white/60 p-1 mt-1"
                    >
                      {/* Date */}
                      <div className="flex items-center justify-end gap-1">
                        <Calendar size={14} className="text-[#daa425]" />
                        <span className="font-mono leading-none pt-[1px]">
                          {new Date(event.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                      </div>

                      {/* Register link */}
                      {event.formlink && (
                        <a
                          href={event.formlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-end gap-1 text-white/60 hover:underline mt-1"
                        >
                          <ExternalLink size={14} className="text-[#daa425]" />
                          <span className="font-mono leading-none pt-[1px]">
                            Register
                          </span>
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right: Event Preview */}
        <div
          className="w-2/5 flex items-center justify-center text-center p-4"
          onClick={() =>
            navigate("/technovista/events", {
              state: {
                title: activeEvent.title,
              },
            })
          }
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeEvent.image}
              src={activeEvent.cartoon}
              alt={activeEvent.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.35, ease: "easeInOut" },
              }}
              className="rounded-2xl object-contain h-[400px] w-auto"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile View (Always 2 columns) */}
      <div className="grid grid-cols-2 gap-4 p-4 lg:hidden">
        {allEvents.map((event) => (
          <div
            key={event.id}
            className="border border-white/10 p-4 flex flex-col items-center text-center hover:bg-white/5 transition duration-300"
            onClick={() =>
              navigate("/technovista/events", {
                state: {
                  title: event.title,
                },
              })
            }
          >
            <img
              src={event.cartoon}
              alt={event.title}
              className="w-40 h-40 object-cover rounded-xl mb-3"
            />
            <h3 className="font-bold text-white font-sans">{event.title}</h3>
            <p className="text-sm text-white/60 font-sans">{event.subtitle}</p>
            <p className="text-xs text-white/40 mt-1 font-mono">
              📅 {new Date(event.date).toDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
