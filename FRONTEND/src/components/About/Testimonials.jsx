import React from "react";
import testimonials from "./testimonial.js";
import "./About.css";

export default function Testimonials() {
  return (
    <div className="testimonials">
      {testimonials.map((t, index) => {
        return (
          <div
            className="testimonial"
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            key={index}
          >
            <div className="tleft">
              <img src={t.image} alt="" />
              <p>{t.name}</p>
              <p>{t.role}</p>
            </div>
            <div className="tright">
              <p>{t.statement}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
