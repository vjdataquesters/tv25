import "./Events.css";
import events from "./events-info.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reveal from "../Reveal.jsx";

export default function Events() {

  const [pastevents, setPastevents] = useState(events.past.e2024);
  const [year, setyear] = useState(2024);

  console.log(events)
  const navigate = useNavigate();

  const handlebuttonclick = (e) => {
    setPastevents(events.past[e])
    if (e === 'e2024') setyear(2024)
    else if (e === 'e2023') setyear(2023)
    else if (e === 'e2022') setyear(2022)
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
                        <div className="event-card" key={index} onClick={() => navigate(event.link)} >
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
            {Object.keys(events.past).map((year) => (
              <button key={year} className="events-btn" onClick={() => handlebuttonclick(year)}>{year.slice(1)}</button>
            ))}
          </div>
          {
            Object.keys(pastevents).length === 0 ? <p>No events in year {year}</p> :
              <>
                <h2>Events of year {year}</h2>
                <div className="past-events-cont">
                  {pastevents.map((event, index) => (
                    <Reveal key={index}>
                      <div className="event-card" key={index} onClick={() => navigate(event.link)}>
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
