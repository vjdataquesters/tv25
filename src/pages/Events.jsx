import "../components/Events/Events.css";
import events from "../data/events.js";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Reveal from "../components/Reveal.jsx";
import Flashcard from "../components/FlashCard.jsx";

export default function Events() {
  const recentYear = Object.keys(events.past)[0];
  const [pastevents, setPastevents] = useState(events.past[recentYear]);
  const [year, setyear] = useState(recentYear.slice(1));
  const navigate = useNavigate();
  const recentEvent1 = events.past[recentYear][0];
  const previousYears = "e" + (recentYear.slice(1) - 1);
  // console.log("prev " + recentEvent1);
  const recentEvent2 =
    events.past[recentYear][1] || events.past[previousYears][0];

  const [itemsPerRow, setItemsPerRow] = useState(1);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerRow(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerRow(2);
      } else {
        setItemsPerRow(1);
      }
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);

    return () => {
      window.removeEventListener("resize", updateItemsPerRow);
    };
  }, []);
  const getGridCols = `grid-cols-${itemsPerRow}`;
  const [showAll, setShowAll] = useState(false);
  const toggleViewMore = () => setShowAll(!showAll);
  const visibleItems = showAll ? pastevents : pastevents.slice(0, itemsPerRow);

  const handlebuttonclick = (e) => {
    setPastevents(events.past[e]);
    setyear(e.slice(1));
  };

  return (
    <>
      {/*Event highlights*/}
      <section className="flex clip-art-default md:clip-art-3 pt-20 pl-10 pr-5 md:p-28 h-2/3 w-full gap-4">
        <div className=" w-full md:w-1/2 ">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Discover Amazing Events we Organized
          </h1>
          <p className="text-xl text-white hidden sm:block pb-12 :pb-none pr-3">
            Explore the diverse range of events we've hosted, designed to
            inspire, educate, and bring our community together
          </p>
        </div>
        <div className=" w-1/2 text-white ">
          <div class="grid lg:grid-cols-2 md:lg:grid-cols-2 gap-6 pb-9">
            <button
              onClick={() => navigate(recentEvent1.link)}
              className="hidden md:block"
            >
              <div class="transform translate-y-8">
                <Flashcard event={recentEvent1} />
              </div>
            </button>
            <button
              onClick={() => navigate(recentEvent2.link)}
              className="hidden lg:block"
            >
              <div class="transform -translate-y-8">
                <Flashcard event={recentEvent2} />
              </div>
            </button>
          </div>
        </div>
      </section>
      {/* Display by year */}
      <div className="max-w-5xl md:max-w-[90%] h-full mb-20 my-4 mx-auto px-4">
        <div className="w-full">
          <div className="pt-6">
            {/* Upcoming events */}
            {events.upcoming.length !== 0 && (
              <>
                <h2 className="text-4xl text-center font-bold mb-7 ">
                  Upcoming Events
                </h2>
                <div className={`grid ${getGridCols} gap-6 pb-8 `}>
                  {events.upcoming.map((event, index) => (
                    <Reveal key={index}>
                      <div
                        className="max-w-[400px] rounded-lg h-full shadow-2xl bg-gray-100 hover:shadow-[0px_25px_50px_-12px] transition-all duration-500 hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                        onClick={() => navigate(event.link)}
                      >
                        <img
                          src={event.image}
                          style={{ maxWidth: "100%" }}
                          alt={event.name}
                          draggable={false}
                          className="w-full rounded-t-lg"
                        />

                        <div className="p-7 pt-0">
                          <span class="inline-block px-3 py-1 bg-[#0f323f] text-white text-sm rounded-full mt-4 mb-2">
                            {event.category}
                          </span>
                          <h2 className="text-2xl font-semibold mb-2 ">
                            {event.name}
                          </h2>
                          <p className="italic">{event.Date}</p>
                          <p className="text-lg mt-2">{event.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col flex-wrap gap-5">
            <h2 className="text-4xl text-center font-bold">Past Events</h2>
            <div className="text-center mt-3">
              {Object.keys(events.past).map((eventyear) => (
                <button
                  key={eventyear}
                  className={`text-center mx-4 w-24 h-9 font-bold text-lg border-2 border-black text-black shadow-[5px_5px_5px_0px] hover:shadow-none  transition-all rounded-md  ${
                    year.toString() === eventyear.slice(1)
                      ? "bg-[#0f323f] text-white"
                      : "bg-white"
                  } `}
                  onClick={() => handlebuttonclick(eventyear)}
                >
                  {eventyear.slice(1)}
                </button>
              ))}
            </div>
            {Object.keys(pastevents).length === 0 ? (
              <p>No events in year {year}</p>
            ) : (
              <>
                {/* Past events */}
                <h2 className="text-2xl">Events of year {year}</h2>
                <div className={`grid ${getGridCols} gap-6 pb-8 `}>
                  {visibleItems.map((event, index) => (
                    <Reveal key={index}>
                      <div
                        className="max-w-[400px] rounded-lg h-full shadow-2xl bg-gray-100 hover:shadow-[0px_25px_50px_-12px] transition-all duration-500 hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                        onClick={() => navigate(event.link)}
                      >
                        <img
                          src={event.image}
                          style={{ maxWidth: "100%" }}
                          alt={event.name}
                          draggable={false}
                          className="w-full rounded-t-lg"
                        />

                        <div className="p-7 pt-0">
                          <span class="inline-block px-3 py-1 bg-[#0f323f] text-white text-sm rounded-full mt-4 mb-2">
                            {event.category}
                          </span>
                          <h2 className="text-2xl font-semibold mb-2 ">
                            {event.name}
                          </h2>
                          <p className="italic">{event.Date}</p>
                          <p className="text-lg mt-2">{event.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <div className="flex justify-center ">
                  <button
                    onClick={toggleViewMore}
                    className=" bg-[#0f323f] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                  >
                    {showAll ? "View Less" : "View All Events"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* category section */}
      <div className="max-w-5xl md:max-w-[90%] h-full mb-20 my-4 mx-auto px-4 border border-black">
        <h1></h1>
      </div>
    </>
  );
}
