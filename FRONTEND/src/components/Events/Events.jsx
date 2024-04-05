import "./Events.css";
import { Link } from "react-router-dom";
export default function Events() {
  const events = [
    {
      name: "VJ DATA QUESTERS ORIENTATION 2023",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Date: "23-11-2023",
      Venue: "APJ AUDITORIUM",
      link: "/events/VjdqOrientation2023",
    },
    {
      name: "HIT - THE 1ST CHASE ",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Date: "11-02-2023",
      Venue: "online",
    },
    {
      name: "BLOG-A-THON",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "A GUEST LECTURE ON DATA SCIENCE JOURNEY IN 2023",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Date: "08-02-2023",
      Venue: "KS Audi",
    }
  ];
  return (
    <>
      <h1>Events</h1>
      <div className="event-box-cont">
        {events.map((event, index) => (
          <div key={index} className="event-box">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <Link to={event.link}>
              <button className="know-more-btn">Know more</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
