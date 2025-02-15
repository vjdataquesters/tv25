import React from 'react';
import newsletter from "../assets/newsletter.pdf";

const NewsLetter = () => {
  return (
    <div className="py-16 px-4 w-full flex justify-center">
      <object 
        data={newsletter}
        type="application/pdf"
        className="w-full md:w-3/4 h-screen"
      >
        <p className="text-center text-gray-600">
          Unable to display PDF. You can <a href={newsletter} className="text-blue-600 hover:text-blue-800 underline">download it here</a>.
    </p>
      </object>
    </div>
  );
};

export default NewsLetter;