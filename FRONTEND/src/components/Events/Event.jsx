import "./Events.css";
import { useParams } from "react-router-dom";
import events from "./events-info.js";

export default function Event() {

    const {eventname} = useParams();

    let e = null;

    e = events.upcoming.find(e => e.eventId === eventname);
    if (!e) {
        Object.values(events.past).forEach(yearEvents => {
            const foundEvent = yearEvents.find(e => e.eventId === eventname);
            if (foundEvent) {
                e = foundEvent;
                return;
            }
        });
    }
    
    const event = e.page;
    
    
    return (
        <div className="events">
            <div className="event-div">
                <h2>{event.name}</h2>
                <br />
                <p><span className="bold">Date:</span> {event.Date} </p>
                <p><span className="bold">Venue:</span> {event.Venue} </p>
                <p><span className="bold">Timings:</span> {event.Timings} </p>
                <br />
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
                <br />
                {
                    event.Winners && (
                        <>
                            <h3>Winners:</h3>
                            <p style={{whiteSpace: "pre-wrap", "word-break": "break-all"}}>{event.Winners}</p>
                        </>
                    )
                }
                <br />
                <h3> Outcome:</h3>
                <p style={{whiteSpace: "pre-wrap", "word-break": "break-all"}} dangerouslySetInnerHTML={{ __html: event.Outcome }} />
                <br />
            </div>
        </div>
    )
}