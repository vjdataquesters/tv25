// TechnovistaForm.js
import React from "react";
import FormBanner from "../../components/TVComponents/FormBanner";
import TForm from "../../components/TVComponents/RegistrationForm";

const TechnovistaForm = () => {
  return (
    <>
      {/* Mobile Layout - Single column */}
      <div className="flex md:hidden pt-20 min-h-screen bg-black">
        <div className="w-full max-w-2xl mx-auto">
          <TForm />
        </div>
      </div>

      {/* Desktop Layout - Two columns */}
      <div className="hidden md:flex justify-center items-center py-20 min-h-screen bg-black">
        <div className="flex w-full max-w-6xl mx-4">
          {/* Left Section - Form Banner */}
          <div className="w-1/2 pr-4">
            <FormBanner />
          </div>

          {/* Right Section - Registration Form */}
          <div className="w-1/2 pl-4">
            <TForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnovistaForm;
