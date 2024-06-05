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
            // style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            key={index}
          >
            <div className="tleft">
              <img src={t.image} alt="" />
            </div>
            <div className="tright">
              <p>{t.statement}</p>
              <p className="testP">- {t.name} ({t.role})</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
