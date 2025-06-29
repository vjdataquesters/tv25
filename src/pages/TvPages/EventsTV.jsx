import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Calendar, Clock, ExternalLink, MapPin, ArrowLeft } from "lucide-react";
import { eventTimeLine } from "../../data/tvData";
import Reveal from "../../components/Reveal.jsx";
import "./Technovista.css";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

// ✅ Superscript date formatter
function formatCustomDate(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const weekday = date.toLocaleString("en-US", { weekday: "long" });

  const getOrdinalSuffix = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const suffix = getOrdinalSuffix(day);

  return (
    <>
      {day}
      <sup className="text-[10px] align-super">{suffix}</sup> {month} {year},{" "}
      {weekday}
    </>
  );
}

const EventsTV = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventRefs = useRef({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);

  const scrollToEvent = location.state?.title;

  useEffect(() => {
    if (scrollToEvent) {
      const section = eventRefs.current[scrollToEvent];
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [scrollToEvent]);

  const handleEventClick = (image) => setSelectedImage(image);
  const closeViewer = () => setSelectedImage(null);

  const handleMouseMove = (e) => {
    if (cursorRef.current && cursorTrailRef.current) {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(cursorTrailRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    }
  };

  useEffect(() => {
    if (isMobile) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      if (cursorTrailRef.current) cursorTrailRef.current.style.display = "none";
      return;
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <div className="min-h-screen text-white bg">
      {!isMobile && (
        <>
          <div
            ref={cursorRef}
            className="fixed w-4 h-4 rounded-full bg-[#daa425] pointer-events-none z-[9999] mix-blend-difference"
            style={{ transform: "translate(-50%, -50%)", left: 0, top: 0 }}
          />
          <div
            ref={cursorTrailRef}
            className="fixed w-8 h-8 rounded-full bg-[#daa425]/30 pointer-events-none z-[9998] mix-blend-difference"
            style={{ transform: "translate(-50%, -50%)", left: 0, top: 0 }}
          />
        </>
      )}

      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-10 max-w-7xl">
        <div className="relative text-center mb-12">
          <ArrowLeft
            onClick={() => navigate("/technovista")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 hover:text-yellow-500 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold inline-block">
            Event <span className="text-yellow-500">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2" />
        </div>

        {/* General Registration Notice */}
        <div className="w-full mb-12">
          <div className="flex justify-between items-center bg-yellow-500/10 border border-yellow-500 rounded-xl px-6 py-4 text-sm sm:text-base text-yellow-200 font-medium">
            <span>
              Please register yourself before registering for individual events.
            </span>
            <button
              onClick={() => navigate("/technovista/register")}
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Register Here
            </button>
          </div>
        </div>

        {eventTimeLine.map(({ day, date, events }) => (
          <div key={day} className="space-y-10 mb-10">
            <Reveal>
              <div className="flex flex-col gap-4 items-start mb-6">
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-5 h-5 text-[#daa425]" />
                    <h2 className="text-xl md:text-2xl font-bold text-[#daa425]">
                      Day {day}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {formatCustomDate(date)}
                  </p>
                  <div className="hidden md:block h-px bg-gradient-to-r from-[#daa425] to-transparent" />
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Reveal key={index}>
                  <div
                    ref={(el) => (eventRefs.current[event.title] = el)}
                    className="max-w-[400px] w-full mx-auto rounded-lg h-full shadow-2xl bg-black border border-yellow-600/40 hover:border-[#daa425] transition-all duration-300 hover:shadow-yellow-500/20 group flex flex-col"
                  >
                    <div
                      onClick={() => handleEventClick(image)}
                      className="relative h-[256px] overflow-hidden flex items-center justify-center bg-black"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="max-h-full max-w-full object-contain sm:object-cover rounded-t-lg"
                        draggable={false}
                      />
                    </div>

                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div className="space-y-2 mb-4">
                        <h3 className="text-xl font-semibold text-[#daa425] group-hover:text-[#f2ca46] transition-colors flex items-center gap-2">
                          <span>{event.icon}</span>
                          {event.title}
                        </h3>
                        {event.subtitle && (
                          <p className="text-md text-yellow-200 italic">
                            {event.subtitle}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4 text-[#daa425]" />
                          {event.time}
                        </div>
                        {event.venue && (
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <MapPin className="w-4 h-4 text-[#daa425]" />
                            {event.venue}
                          </div>
                        )}
                        {event.description && (
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {event.description}
                          </p>
                        )}
                        {event.highlights?.length > 0 && (
                          <div className="overflow-hidden mt-3 w-full">
                            <div className="flex gap-3 animate-marquee whitespace-nowrap">
                              {event.highlights.map((tag, i) => (
                                <div
                                  key={i}
                                  title={tag}
                                  className="inline-block bg-white/5 border border-[#daa425] text-yellow-300 text-xs md:text-sm rounded-xl px-3 py-1 backdrop-blur-md hover:scale-105 transition-transform duration-300"
                                >
                                  {tag}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-auto">
                        {(() => {
                          const today = new Date();
                          const eventDate = new Date(date);

                          if (event.formlink) {
                            if (eventDate < today) {
                              return (
                                <span className="block w-full text-center bg-gray-800 text-gray-400 font-semibold px-4 py-2 rounded-xl">
                                  Register Closed
                                </span>
                              );
                            } else {
                              return (
                                <button
                                  onClick={() =>
                                    window.open(event.formlink, "_blank")
                                  }
                                  className="w-full bg-gradient-to-r from-[#daa425] to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-4 py-2 rounded-2xl transition-all duration-[400ms] hover:scale-105 hover:shadow-yellow-500/20 shadow"
                                >
                                  <div className="flex items-center justify-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Register Now
                                  </div>
                                </button>
                              );
                            }
                          } else {
                            return (
                              <span className="block w-full text-center border border-yellow-300 text-yellow-400 font-medium px-4 py-2 rounded-2xl backdrop-blur-2xl bg-white/5">
                                Stay Tuned
                              </span>
                            );
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTV;
