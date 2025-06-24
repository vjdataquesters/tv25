import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { eventTimeLine } from "../../data/tvData";
import { motion } from "framer-motion";

const EventsTV = () => {
  const location = useLocation();
  const dayRefs = useRef({});
  const scrollToDay = location.state?.day;

  useEffect(() => {
    if (scrollToDay) {
      const section = dayRefs.current[`day${scrollToDay}`];
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [scrollToDay]);

  return (
    <div className="min-h-screen text-white bg ">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-10 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Event <span className="text-yellow-500">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2" />
        </div>

        {eventTimeLine.map(({ day, date, events }) => (
          <div
            key={day}
            ref={(el) => (dayRefs.current[`day${day}`] = el)}
            className="space-y-10 mb-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4 items-start mb-6">
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-500" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500">
                      Day {day}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <div className="hidden md:block flex-grow h-px bg-gradient-to-r from-yellow-400 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.map(
                ({ title, time, description, image, formlink }, index) => (
                  <motion.div
                    key={index}
                    className="max-w-[400px] w-full mx-auto rounded-lg h-full shadow-2xl bg-black border border-yellow-600/40 hover:border-yellow-500 transition-all duration-300 hover:shadow-yellow-500/20 group flex flex-col"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-4/6 overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-64 object-contain sm:object-cover rounded-t-lg"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div className="space-y-2 mb-4">
                        <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition-colors">
                          {title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4 text-yellow-500" />
                          {time}
                        </div>
                        {description && (
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {description}
                          </p>
                        )}
                      </div>

                      <div className="mt-auto">
                        {(() => {
                          const today = new Date();
                          const eventDate = new Date(date);

                          if (formlink) {
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
                                    window.open(formlink, "_blank")
                                  }
                                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-4 py-2 rounded-2xl transition-all duration-[400ms] hover:scale-105 hover:shadow-yellow-500/20 shadow"
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
                  </motion.div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTV;
