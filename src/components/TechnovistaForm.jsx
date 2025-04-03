import React from "react";
import Leftside from "../components/FormBanner";
import TForm from "./TForm";

const TechnovistaForm = () => {
  return (
    <>
      <div className="flex md:hidden pt-20">
       
      </div>
      <div className="hidden md:flex justify-center items-center py-20 min-h-screen bg-black">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row w-full md:max-w-6xl bg-white/30 backdrop-blur-md rounded-lg">
          {/* Left Section (Hidden on small screens) */}
          <div className="hidden md:flex md:w-1/2 text-white justify-center items-center rounded-l-lg">
            <Leftside />
          </div>
          {/* Right Section (Form) */}
          <div className="w-full md:w-1/2 bg-white/50 backdrop-blur-md flex flex-row justify-center items-center md:rounded-r-lg">
            <TForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnovistaForm;