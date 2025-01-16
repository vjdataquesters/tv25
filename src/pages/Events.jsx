import "../components/Events/Events.css";
import events from "../data/events.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reveal from "../components/Reveal.jsx";

export default function Events() {
  const recentYear = Object.keys(events.past)[0];
  const [pastevents, setPastevents] = useState(events.past[recentYear]);
  const [year, setyear] = useState(recentYear.slice(1));
  const navigate = useNavigate();

  const handlebuttonclick = (e) => {
    setPastevents(events.past[e]);
    setyear(e.slice(1));
  };

  const recentEvent1 = events.past[recentYear][0];
  const previousYears = "e" + (recentYear.slice(1) - 1);
  console.log("prev " + recentEvent1);
  const recentEvent2 =
    events.past[recentYear][1] || events.past[previousYears][0];

  return (
    <>
      <section className="flex clip-art-default md:clip-art-3 pt-20 pl-10 pr-5 md:p-28 h-2/3 w-full gap-4">
        <div className=" w-full md:w-1/2 ">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Discover Amazing Events we Organized
          </h1>
          <p className="text-white hidden sm:block pb-12 :pb-none">
            Explore the diverse range of events we've hosted, designed to
            inspire, educate, and bring our community together
          </p>
        </div>
        <div className=" w-1/2 text-white ">
          <div class="grid lg:grid-cols-2 md:lg:grid-cols-2 gap-6 ">
            <button
              onClick={() => navigate(recentEvent1.link)}
              className="hidden md:block"
            >
              <div class="transform translate-y-8">
                <div class="bg-[#ffffff] p-4 rounded-lg  hover:scale-[1.1] transition-all duration-500 text-[#0f323f]">
                  <div class=" bg-neutral-700 rounded-md mb-4">
                    <img
                      src={recentEvent1.image}
                      className="object-fill rounded"
                      alt="recent-event-1"
                    ></img>
                  </div>
                  <h3 class="font-semibold">{recentEvent1.name}</h3>
                  <p class="text-sm text-gray-300 text-[#0f323f]">{recentEvent1.date}</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => navigate(recentEvent2.link)}
              className="hidden lg:block"
            >
              <div class="transform -translate-y-8">
                <div class="bg-[#0f323f] p-4 rounded-lg hover:scale-[1.1] transition-all duration-500">
                  <div class=" bg-neutral-700 rounded-md mb-4">
                    <img
                      src={recentEvent2.image}
                      className="object-fill"
                      alt="recent-event-2"
                    ></img>
                  </div>
                  <h3 class="font-semibold">{recentEvent2.name}</h3>
                  <p class="text-sm text-gray-300">{recentEvent2.date}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-5xl md:max-w-[90%] h-full mb-20 my-4 mx-auto px-4">
        <div className="w-full">
          <div className="pt-6">
            {/* Upcoming events */}
            {events.upcoming.length !== 0 && (
              <>
                <h2 className="text-4xl text-center mb-7">Upcoming Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {events.upcoming.map((event, index) => (
                      <Reveal key={index}>
                        <div
                          className="p-4 max-w-[400px] shadow-2xl bg-gray-100 flex flex-col justify-between hover:shadow-[0px_25px_50px_-12px] transition-all hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                          onClick={() => navigate(event.link)}
                        >
                          <img
                            src={event.image}
                            style={{ maxWidth: "100%" }}
                            alt={event.name}
                            draggable={false}
                          />
                          <h2 className="font-semibold text-2xl">
                            {event.name}
                          </h2>
                          <p className="italic">{event?.Date}</p>
                          {event.isGFormEmbeddable && <h2>Tap to register</h2>}
                          <p className="text-lg mt-2">{event.description}</p>
                        </div>
                      </Reveal>
                    ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col flex-wrap gap-5">
            <h2 className="text-4xl text-center">Past Events</h2>
            <div className="text-center mt-3">
              {Object.keys(events.past).map((eventyear) => (
                <button
                  key={eventyear}
                  className={`text-center mx-4 w-24 h-9 font-bold text-lg border-2 border-black text-black shadow-[5px_5px_5px_0px] hover:shadow-none  transition-all rounded-md  ${
                    year.toString() === eventyear.slice(1)
                      ? "bg-[#0f323f] text-white"
                      : "bg-white"
                  } `}
                  onClick={() => handlebuttonclick(eventyear)}
                >
                  {eventyear.slice(1)}
                </button>
              ))}
            </div>
            {Object.keys(pastevents).length === 0 ? (
              <p>No events in year {year}</p>
            ) : (
              <>
                {/* Past events */}
                <h2 className="text-2xl">Events of year {year}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                  {pastevents.map((event, index) => (
                    <Reveal key={index}>
                      <div
                        className="p-3 max-w-[400px] h-full shadow-2xl bg-gray-100 hover:shadow-[0px_25px_50px_-12px] transition-all hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                        onClick={() => navigate(event.link)}
                      >
                        <img
                          src={event.image}
                          style={{ maxWidth: "100%" }}
                          alt={event.name}
                          draggable={false}
                        />
                        <h2 className="font-semibold text-2xl py-1">
                          {event.name}
                        </h2>
                        <p className="italic">{event.Date}</p>
                        <p className="text-lg mt-2">{event.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
