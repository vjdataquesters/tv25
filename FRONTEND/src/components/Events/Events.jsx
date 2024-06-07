import "./Events.css";
import events from "./events-info.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reveal from "../Reveal.jsx";

export default function Events() {

  const [pastevents, setPastevents] = useState(
    localStorage.getItem("year") ? events.past[`e${localStorage.getItem("year")}`] : events.past.e2024
  );
  const [year, setyear] = useState(
    localStorage.getItem("year") ? parseInt(localStorage.getItem("year")) : 2024
  );

  const navigate = useNavigate(); 

  const handlebuttonclick = (e) => {
    setPastevents(events.past[e])
    if (e === 'e2024') {
      setyear(2024)
      localStorage.setItem("year", 2024)
    }
    else if (e === 'e2023') {
      setyear(2023)
      localStorage.setItem("year", 2023)
    }
    // else if (e === 'e2022') {
    //   setyear(2022)
    //   localStorage.setItem("year", 2022)
    // }
  }
  return (
    <div className="events">
      <h1>Events</h1>
      <div className="event-box">
        <div className="upcoming-events">

          {
            events.upcoming.length !== 0 && (
              <>
                <h2>Upcoming Events</h2>
                <div className="upcoming-events-cont">
                  {
                    events.upcoming.map((event, index) => (
                      <Reveal key={index}>
                        <div className="event-card" onClick={() => navigate(event.link)} >
                          <img src={event.image} style={{ maxWidth: "100%" }} alt={event.name} />
                          <h2>{event.name}</h2>
                          <p>{event.Date}</p>
                          <p>{event.description}</p>
                        </div>
                      </Reveal>
                    ))
                  }
                </div>
              </>
            )
          }
        </div>

        <div className="past-events">
          <h2>Past Events</h2>
          <div className="year-buttons">
            {Object.keys(events.past).map((eventyear) => (
              <button key={eventyear} className={year.toString() === eventyear.slice(1) ? "events-btn active" : "events-btn"}  onClick={() => handlebuttonclick(eventyear)}>{eventyear.slice(1)}</button>
            ))}
          </div>
          {
            Object.keys(pastevents).length === 0 ? <p>No events in year {year}</p> :
              <>
                <h2>Events of year {year}</h2>
                <div className="past-events-cont">
                  {pastevents.map((event, index) => (
                    <Reveal key={index}>
                      <div className="event-card" onClick={() => navigate(event.link)}>
                        <img src={event.image} style={{ maxWidth: "100%" }} alt={event.name} />
                        <h2>{event.name}</h2>
                        <p>{event.Date}</p>
                        <p>{event.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </>
          }
        </div>
      </div>
    </div>
  );
}
