import { useEffect, useState } from "react";

const Technovista = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Delayed loading for animation effect
  }, []);

  return (
    <div className="w-full bg-black text-white">
      <div className="w-[90%] sm:w-[80%] mt-20 m-auto ">
        <div className="flex flex-col item1s-center gap-10 min-h-[calc(100vh-4.5rem)]">
          <h1 className="text-center text-4xl sm:text-5xl md:text-7xl ">
            𝕋𝔼ℂℍℕ𝕆𝕍𝕀𝕊𝕋𝔸
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Technovista;
