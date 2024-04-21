import "./Events.css";
import { useParams } from "react-router-dom";
import events from "./events-info.js";

export default function Event() {

    const {eventname} = useParams();
    const e = events[1].find(event => event.eventId === eventname);
    const event = e.page;
    
    
    return (
        <div className="events">
            <div className="event-div">
                <h2>{event.name}</h2>
                <p><span className="bold">Date:</span> {event.Date} </p>
                <p><span className="bold">Venue:</span> {event.Venue} </p>
                <p><span className="bold">Timings:</span> {event.Timings} </p>
                <h3>Pics of the event</h3>
                <div className="gallery">
                    <div className="event-slider">
                        <div className="slides" >
                            {event.Pics.map((img, index) => (
                                <div key={index}>
                                    <img id={"slide-" + (index + 1)} src={img} alt={event.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {
                    event.Winners && (
                        <div style={{whiteSpace: "pre-wrap"}}>
                            <h3>Winners:</h3>
                            <p>{event.Winners}</p>
                        </div>
                    )
                }

                <h3> Outcome:</h3>
                <p>
                    {event.Outcome}
                </p>
            </div>
        </div>
    )
}