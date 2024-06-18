import "./Events.css";
import { useParams } from "react-router-dom";
import events from "./events-info.js";

export default function Event() {
  const { eventname } = useParams();

  let e = null;

  e = events.upcoming.find((e) => e.eventId === eventname);
  if (!e) {
    Object.values(events.past).forEach((yearEvents) => {
      const foundEvent = yearEvents.find((e) => e.eventId === eventname);
      if (foundEvent) {
        e = foundEvent;
        return;
      }
    });
  }

  const event = e.page;

  return (
    <div className="events pt-20">
      <div className="event-div m-auto w-[90%]">
        <h2 className="font-semibold text-5xl">{event.name}</h2>
        <br />
        <p>
          <span className="font-semibold text-xl">Date:</span> {event.Date}{" "}
        </p>
        <p>
          <span className="font-semibold text-xl">Venue:</span> {event.Venue}{" "}
        </p>
        <p>
          <span className="font-semibold text-xl">Timings:</span>{" "}
          {event.Timings}{" "}
        </p>
        <br />
        {events.pics && (
          <>
            <h3 className="font-semibold text-2xl">Pics of the event</h3>
            <div className="gallery rounded-md m-4">
              <div className="event-slider rounded-md shadow-2xl w-full h-[30vh] sm:w-3/5 sm:h-96 mx-auto">
                <div className="slides border-2 h-full  border-black rounded-md flex overflow-x-auto">
                  {event.Pics.map((img, index) => (
                    <div key={index}>
                      <img
                        className="mx-auto aspect-video w-[80vw] lg:w-[40vw] rounded-md "
                        id={"slide-" + (index + 1)}
                        src={img}
                        alt={event.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        <br />
        {event.Winners && (
          <>
            <h3 className="font-semibold text-3xl">Winners:</h3>
            <p
              className="text-base sm:text-lg overflow-x-scroll sm:overflow-x-hidden"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: event.Winners }}
            ></p>
          </>
        )}
        <br />
        {events.Outcome && (
          <>
            <h3 className="font-semibold text-3xl"> Outcome:</h3>
            <p
              className="text-base sm:text-lg "
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: event.Outcome }}
            ></p>
          </>
        )}
        <br />
      </div>
    </div>
  );
}
