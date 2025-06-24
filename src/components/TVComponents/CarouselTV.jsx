import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { eventTimeLine } from "../../data/tvData";
import "./TvComponents.css";

const Carousel3D = () => {
  const navigate = useNavigate();

  // Gather and sort images
  const imageFiles = useMemo(() => {
    const images = [];
    eventTimeLine.forEach((day) =>
      day.events.forEach((event) => {
        if (event.image && !images.includes(event.image))
          images.push(event.image);
      })
    );
    return images.sort((a, b) => {
      const aNum = a.match(/img(\d+)/)?.[1];
      const bNum = b.match(/img(\d+)/)?.[1];
      return aNum && bNum ? aNum - bNum : a.localeCompare(b);
    });
  }, []);

  // Map image to day
  const eventDayMap = useMemo(() => {
    const map = {};
    eventTimeLine.forEach((day, i) => {
      day.events.forEach((event) => {
        const key = event.image.match(/img\d+/)?.[0];
        if (key) map[key] = i + 1;
      });
    });
    return map;
  }, []);

  const total = imageFiles.length;
  const speed = 0.16;
  const [angle, setAngle] = useState(0);
  const angleRef = useRef(0);
  const [hovered, setHovered] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startAngle, setStartAngle] = useState(0);
  const [dims, setDims] = useState({ width: window.innerWidth });
  const requestRef = useRef(null);

  const isPhone = dims.width <= 480;
  const isTablet = dims.width <= 768;
  const step = 360 / total;

  const config = useMemo(
    () => ({
      imageWidth: isPhone ? 160 : isTablet ? 200 : 240,
      imageHeight: isPhone ? 90 : isTablet ? 112 : 134,
      radius: isPhone ? 200 : isTablet ? 300 : 380,
      perspective: 1200,
      transition: 0.6,
    }),
    [isPhone, isTablet]
  );

  // Resize listener
  useEffect(() => {
    const onResize = () => setDims({ width: window.innerWidth });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // sync ref
  useEffect(() => {
    angleRef.current = angle;
  }, [angle]);

  // auto rotate
  useEffect(() => {
    if (!dragging && hovered === null) {
      const animate = () => {
        angleRef.current -= speed;
        setAngle(angleRef.current);
        requestRef.current = requestAnimationFrame(animate);
      };
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [dragging, hovered]);

  const startDrag = useCallback((x) => {
    setDragging(true);
    setStartX(x);
    setStartAngle(angleRef.current);
  }, []);

  const moveDrag = useCallback(
    (x) => {
      if (!dragging) return;
      const delta = x - startX;
      setAngle(startAngle + delta * 0.5);
    },
    [dragging, startX, startAngle]
  );

  const endDrag = useCallback(() => setDragging(false), []);
  const onHover = useCallback((i) => {
    setHovered(i);
    setDragging(false);
  }, []);
  const onLeave = useCallback(() => setHovered(null), []);

  return (
    <div
      className="technovista-carousel-container"
      style={{
        width: "100%",
        perspective: config.perspective,
        background: "transparent",
      }}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      <div
        className="technovista-carousel-inner"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${angle}deg)`,
          transition: dragging
            ? "none"
            : `transform ${config.transition}s ease-out`,
        }}
      >
        {imageFiles.map((img, i) => {
          const deg = step * i;
          const rad = (deg * Math.PI) / 180;
          const x = Math.sin(-rad) * config.radius;
          const z = Math.cos(-rad) * config.radius;
          const day = eventDayMap[img.match(/img\d+/)[0]];
          return (
            <div
              key={i}
              className="technovista-carousel-item"
              style={{
                width: config.imageWidth,
                height: config.imageHeight,
                marginLeft: -config.imageWidth / 2,
                marginTop: -config.imageHeight / 2,
                transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-deg}deg)`,
                transition: dragging
                  ? "none"
                  : `all ${config.transition}s ease-out`,
                zIndex: hovered === i ? 10 : "auto",
              }}
              onClick={() =>
                !dragging && navigate("/technovista/events", { state: { day } })
              }
              onMouseEnter={() => onHover(i)}
              onMouseLeave={onLeave}
            >
              <div
                className="technovista-image-container"
                style={{
                  border:
                    hovered === i ? "2px solid #f5cb5c" : "1px solid #f2ecdd",
                  transform: hovered === i ? "scale(1.1)" : "scale(1)",
                  boxShadow: hovered === i ? "0 0 10px #f5cb5c80" : "none",
                }}
              >
                <img
                  src={img}
                  alt={`Event ${i + 1}`}
                  className="technovista-image"
                  draggable="false"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Carousel3D);
