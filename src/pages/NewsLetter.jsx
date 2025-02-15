import React from "react";

const NewsLetter = () => {
  const driveUrl =
    "https://drive.google.com/file/d/12FzHpeT4QCZ_E_QuObW8WBUnsrmgeR4l/preview";

  return (
    <div className="py-20 px-4 w-full flex flex-col items-center">
      <div className="w-full md:w-3/4 rounded-lg overflow-hidden shadow-lg bg-white">
        <iframe
          src={driveUrl}
          className="w-full h-screen"
          title="Newsletter PDF Preview"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* View in Drive button */}
      <div className="mt-8">
        <a
          href="https://drive.google.com/file/d/12FzHpeT4QCZ_E_QuObW8WBUnsrmgeR4l/view"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#0f323f] text-white rounded-lg hover:scale-[105%] hover:shadow-xl transition-colors duration-300"
        >
          View in Drive
        </a>
      </div>
    </div>
  );
};

export default NewsLetter;
