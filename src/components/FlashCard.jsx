import { useRef, useState } from "react";

function Flashcard({ event }) {
  const [currentActivePicIdx, setCurrentActivePicIdx] = useState(0);
  const intervalRef = useRef(null);

  const startCarousel = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentActivePicIdx((prevIdx) =>
          prevIdx >= event.pics.length - 1 ? 0 : prevIdx + 1
        );
      }, 1000);
    }
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCurrentActivePicIdx(0);
    }
  };

  return (
    <div
      className="bg-[#0f323f] p-4 rounded-lg hover:scale-[1.1] transition-all duration-500 text-[#ffffff]"
      onMouseOver={startCarousel}
      onMouseOut={stopCarousel}
    >
      <div className="bg-neutral-700 rounded-md mb-4">
        <img
          src={event.pics[currentActivePicIdx]}
          className="object-fill rounded"
          alt={event.name}
        />
      </div>
      <h3 className="font-semibold">{event.name}</h3>
      <p className="text-sm text-gray-300">{event.date}</p>
    </div>
  );
}

export default Flashcard;
