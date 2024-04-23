import "./Events.css";
import events from "./events-info.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reveal from "../Reveal.jsx";

export default function Events() {

  const [pastevents, setPastevents] = useState(events.past.e2024);

  console.log(events)
  const navigate = useNavigate();

  return (
    <div className="events">
      <h1>Events</h1>
      <div className="event-box">
        <div className="upcoming-events">

          {
            events.upcoming.length !== 0 && (
              <>
                <h2>Upcoming Events</h2>
                {
                  events.upcoming.map((event, index) => (
                    <Reveal key={index}>
                      <div className="event-card" key={index} onClick={() => navigate(event.link)} >
                        <img src={event.image} style={{ maxWidth: "95%", margin: "0 auto" }} alt={event.name} />
                        <h3>{event.name}</h3>
                        <p>{event.Date}</p>
                        <p>{event.description}</p>
                      </div>
                    </Reveal>
                  ))
                }
              </>
            )
          }
        </div>

        <div className="past-events">
          <h2>Past Events</h2>
          <div className="year-buttons">
            {Object.keys(events.past).map((year) => (
              <button key={year} onClick={() => setPastevents(events.past[year])}>{year.slice(1)}</button>
            ))}
          </div>
          {
            Object.keys(pastevents).length === 0 ? <h3>No past events</h3> :
            <div className="past-events-cont">
              {pastevents.map((event, index) => (
                <Reveal key={index}>
                  <div className="event-card" key={index} onClick={() => navigate(event.link)}>
                    <img src={event.image} style={{ maxWidth: "95%", margin: "0 auto" }} alt={event.name} />
                    <h3>{event.name}</h3>
                    <p>{event.Date}</p>
                    <p>{event.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
