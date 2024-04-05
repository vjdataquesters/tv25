import "./Events.css";
import  events from "./events-info.js";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
export default function Events() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  function handleClick(){
    setClicked(true);
  }
  return (
    <div className="events">
      <h1>Events</h1>
      <div className="event-box-cont">
        {events[0].map((event, index) => (
          <div key={index} className="event-box" onClick={()=>navigate(event.link)} >
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      <div className="past-events">
        <h2>Past Events</h2>
        <div className="event-box-cont">
          {/* should show buttons of events2022,etc */}
          <button onClick={handleClick(true)}>  
            2022
          </button>
        </div>
      </div>
    </div>
  );
}
