import "./Events.css";
import { useParams } from "react-router-dom";
import events from "../../data/events-info.js";

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
            {/* <h3 className="font-semibold text-2xl">Pics of the event</h3> */}
            <div className="gallery rounded-md m-4">
              <div className="event-slider rounded-md shadow-2xl w-full h-[30vh] sm:w-3/5 sm:h-96 mx-auto">
                <div className="slides border h-full  border-gray-600/20 rounded-md flex overflow-x-auto">
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
            <a href={event.register} target="_blank">
              <h1 className="text-2xl mt-6 mb-4 text-blue-500 underline">Register Now !!!</h1>
              <p className="text-sm italic ">fill out the gform</p>
            </a>
            <div
              style={{
                position: "relative",
                paddingBottom: "150%",
                height: 0,
                overflow: "hidden",
                maxWidth: "100%",
              }}
            >
              <iframe
                src={event.register}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowfullscreen
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
