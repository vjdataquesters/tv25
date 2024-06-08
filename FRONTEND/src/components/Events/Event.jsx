import "./Events.css";
import { useParams } from "react-router-dom";
import events from "./events-info.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";


const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    // exit: (direction) => {
    //     return {
    //         // zIndex: 0,
    //         // x: direction < 0 ? 1000 : -1000,
    //         // opacity: 0
    //     };
    // }
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export default function Event() {
    const [[page, direction], setPage] = useState([0, 0]);
    const { eventname } = useParams();

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
    const imgs = event.Pics;
    console.log(imgs);
    const imageIndex = wrap(0, imgs.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

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
                <div className="flex items-center justify-center relative gap-2 mx-auto ">
                    <div className="prev text-white text-4xl text-center border-2 border-black w-6 h-6 p-4 rounded-full" onClick={() => paginate(-1)}>
                        {"‣"}
                    </div>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={imgs[imageIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className=" aspect-video w-[80vw] lg:w-[40vw]"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        />
                    </AnimatePresence>
                    <div className="next text-white text-4xl text-center border-2 border-black w-6 h-6 p-4 rounded-full" onClick={() => paginate(1)}>
                        {"‣"}
                    </div>

                </div>
                <br />
                {
                    event.Winners && (
                        <>
                            <h3>Winners:</h3>
                            <p style={{ whiteSpace: "pre-wrap" }}>{event.Winners}</p>
                        </>
                    )
                }
                <br />
                <h3> Outcome:</h3>
                <p style={{ whiteSpace: "pre-wrap", }} dangerouslySetInnerHTML={{ __html: event.Outcome }} />
                <br />
            </div>
        </div>
    )
}