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
  console.log(event);

  return (
    <div className="events pt-20">
      <div className="event-div m-auto w-[90%]">
        <h2 className="font-semibold text-3xl mb-4">{event.name}</h2>
        <p>
          <span className="font-semibold text-xl">Date:</span> {event.date}{" "}
        </p>
        <p>
          <span className="font-semibold text-xl">Venue:</span> {event.venue}{" "}
        </p>
        <p>
          <span className="font-semibold text-xl">Timings:</span>{" "}
          {event.timings}{" "}
        </p>

        {event.pics && (
          <div className="my-6">
            <h3 className="font-semibold text-2xl">Pics of the event</h3>
            <div className="gallery rounded-md m-4">
              <div className="event-slider rounded-md shadow-2xl w-full h-[30vh] sm:w-3/5 sm:h-96 mx-auto">
                <div className="slides border-2 h-full  border-black rounded-md flex overflow-x-auto">
                  {event.pics.map((img, index) => (
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
          </div>
        )}
        {event.winners && (
          <div className="my-10">
            <h3 className="font-semibold text-3xl">Winners:</h3>
            <p
              className="text-base sm:text-lg overflow-x-scroll sm:overflow-x-hidden"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: event.winners }}
            ></p>
          </div>
        )}
        {event.outcome && (
          <div className="my-10">
            <h3 className="font-semibold text-3xl"> Outcome:</h3>
            <p
              className="text-base sm:text-lg "
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: event.outcome }}
            ></p>
          </div>
        )}
        {event.register && (
          <div className="my-10 w-full text-center">
            <h1 className="text-2xl mt-6 mb-4">Register Now !!!</h1>
            <a href={event.register} target="_blank">
              {" "}
              <button className="px-8 py-2 text-yellow-400 text-2xl border-2 border-black bg-black italic rounded-sm active:bg-white active:border-2 active:border-black active:text-black">REGISTER</button>{" "}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
