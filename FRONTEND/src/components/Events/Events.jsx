import "./Events.css";
import  events from "./events-info.js";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
export default function Events() {
  const navigate = useNavigate();
  const [i, setI]= useState(0);
  const [year, setYear] = useState(2023);
  function handleClick(e){
    e.target.innerHTML === "2023" &&  (setI(0) || setYear(2023));
    e.target.innerHTML === "2022" && ( setI(1) || setYear(2022));
  }
  return (
    <div className="events">
      <h2>Events of the year {year}</h2>
      <div className="events-buttons">
        <button onClick={handleClick}>2023</button>
        <button onClick={handleClick}>2022</button>
      </div>
      <div className="event-box-cont">
        {events[i].map((event, index) => (
          <div key={index} className="event-box" onClick={()=>navigate(event.link)} >
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
