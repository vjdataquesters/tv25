import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineSwitchAccessShortcut } from "react-icons/md";

export const PromoDiv = () => {
  return (
    <Link to="events/profolio">
      <div
        className="fixed z-[101] bottom-6 right-4 p-2 bg-black/40 border border-black/50 shadow-2xl rounded-sm backdrop-blur-sm w-32"
      >
        <h1 className="text-white m-auto text-lg sm:text-2xl">
          Profolio
        </h1>
        <span className="flex justify-end items-center gap-1">
          <p className="text-right text-white">View </p>{" "}
          <MdOutlineSwitchAccessShortcut size={20} color="white" />
        </span>
      </div>
    </Link>
  );
};
