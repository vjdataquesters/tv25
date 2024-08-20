import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineSwitchAccessShortcut } from "react-icons/md";

export const PromoDiv = () => {
  return (
    <Link to="events/profolio">
      <div className="fixed z-[101] text-center bottom-6 right-4 px-2 py-1 bg-black/40 border border-black/50 shadow-2xl rounded-sm backdrop-blur-sm ">
        <h1 className="text-white mx-4 text-lg sm:text-2xl leading-none">
          Profolio
        </h1>
        <span className="flex justify-end items-center ">
          <p className="text-white">View </p>{" "}
          <MdOutlineSwitchAccessShortcut size={20} color="white" />
        </span>
      </div>
    </Link>
  );
};
