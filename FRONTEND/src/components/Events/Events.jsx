import "./Events.css";
import events from "./events-info.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reveal from "../Reveal.jsx";

export default function Events() {

  const navigate = useNavigate();

  return (
    <div className="events">
      <h1>Events</h1>
      <div className="event-box">
        {events[1].map((event, index) => (
          <Reveal key={index}>
            <div  className="event-card" key={index} onClick={() => navigate(event.link)} >
              <img src={event.image} style={{maxWidth:"95%", margin:"0 auto"}} alt={event.name} />
              <br />
              <h3>{event.name}</h3>
              <p>{event.Date}</p>
              <br />
              <p>{event.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
