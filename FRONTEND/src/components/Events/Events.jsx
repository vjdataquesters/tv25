import "./Events.css";
import events from "./events-info.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reveal from "../Reveal.jsx";
export default function Events() {
  const [pastevents, setPastevents] = useState(
    localStorage.getItem("year")
      ? events.past[`e${localStorage.getItem("year")}`]
      : events.past.e2024
  );
  const [year, setyear] = useState(
    localStorage.getItem("year") ? parseInt(localStorage.getItem("year")) : 2024
  );

  const navigate = useNavigate();

  const handlebuttonclick = (e) => {
    setPastevents(events.past[e]);
    if (e === "e2024") {
      setyear(2024);
      localStorage.setItem("year", 2024);
    } else if (e === "e2023") {
      setyear(2023);
      localStorage.setItem("year", 2023);
    }
    // else if (e === 'e2022') {
    //   setyear(2022)
    //   localStorage.setItem("year", 2022)
    // }
  };
  return (
    <div className="events w-[85%] h-full mb-20 my-4 mx-auto pt-20">
      <h1 className="font-semibold text-5xl">Events</h1>
      <div className="event-box w-full">
        <div className="upcoming-events ">
          {events.upcoming.length !== 0 && (
            <>
              <h2>Upcoming Events</h2>
              <div className="upcoming-events-cont flex flex-wrap justify-start gap-8">
                {events.upcoming.map((event, index) => (
                  <Reveal key={index}>
                    <div
                      className="event-card p-4 max-w-[400px] shadow-2xl bg-gray-100 flex flex-col justify-between hover:shadow-[0px_25px_50px_-12px] transition-all hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                      onClick={() => navigate(event.link)}
                    >
                      <img
                        src={event.image}
                        style={{ maxWidth: "100%" }}
                        alt={event.name}
                      />
                      <h2 className="font-semibold text-2xl">{event.name}</h2>
                      <p className="italic">{event.Date}</p>
                      <p>{event.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="past-events flex flex-col flex-wrap gap-8">
          <h2 className="text-2xl">Past Events</h2>
          <div className="year-buttons">
            {Object.keys(events.past).map((eventyear) => (
              <button
                key={eventyear}

                className={`mx-4 w-24 h-9 font-bold text-lg border-2 border-black text-black shadow-[5px_5px_1px_0px] hover:shadow-none  transition-all ${
                  year.toString() === eventyear.slice(1) ?
                  "bg-[#0f323f] text-white" : "bg-white"
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
              <h2 className="text-3xl">Events of year {year}</h2>
              <div className="past-events-cont flex flex-wrap justify-start gap-8">
                {pastevents.map((event, index) => (
                  <Reveal key={index}>
                    <div
                      className="event-card p-4 max-w-[400px] shadow-2xl bg-gray-100 flex flex-col justify-between hover:shadow-[0px_25px_50px_-12px] transition-all hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                      onClick={() => navigate(event.link)}
                    >
                      <img
                        src={event.image}
                        style={{ maxWidth: "100%" }}
                        alt={event.name}
                      />
                      <h2 className="font-semibold text-2xl">{event.name}</h2>
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
  );
}
