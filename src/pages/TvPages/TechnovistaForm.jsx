// TechnovistaForm.js
import React from "react";
import FormBanner from "../../components/TVComponents/FormBanner";
import TForm from "../../components/TVComponents/RegistrationForm";

const TechnovistaForm = () => {
  return (
    <>
      {/* Mobile Layout - Single column */}
      <div className="flex md:hidden pt-8 px-4 min-h-[calc(100vh-5rem)] bg">
        <div className="w-full max-w-7xl mx-auto">
          <TForm />
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center py-12 min-h-[calc(100vh-5rem)] bg">
        <div className="flex w-full max-w-6xl mx-4 h-full">
          {/* Left Section - Form Banner */}
          <div className="w-1/2 pr-4 h-full">
            <FormBanner />
          </div>
          {/* Right Section - Registration Form */}
          <div className="w-1/2 pl-4 h-full">
            <TForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnovistaForm;
