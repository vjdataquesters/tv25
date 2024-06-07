import React from "react";
import testimonials from "./testimonial.js";
import './About.css';
import Reveal from "../Reveal.jsx";
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <div className="testimonials w-full lg:w-[85%] mx-auto mt-[4.5rem] flex flex-col gap-8 p-8 ">
      <h2 className="text-center text-5xl font-semibold">Testimonials</h2>
      {testimonials.map((t, index) => {
        return (
          <div key={index}>
          <Reveal>
            <div
              className={`testimonial p-4 md:p-12 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 rounded-xl bg-black/5 shadow-lg hover:backdrop-blur-[2px] hover:bg-black/10 hover:shadow-2xl transition-all duration-300 ease-in-out`}
            >
              <div className="tleft w-full flex flex-col justify-center items-center text-center">
                <img src={t.image} alt="" className="w-[200px] h-[200px] !min-w-[200px] !min-h-[200px] rounded-full" />
              </div>
              <div className="tright border-black/30 border-2 p-4 rounded-lg">
                <p className="text-black">{t.statement}</p>
                <p className="testP text-black text-right mt-1 italic">- {t.name} ({t.role})</p>
              </div>
            </div>
          </Reveal>
          </div>
        );
      })}
    </div>
  );
}
