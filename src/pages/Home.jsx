import { motion } from "framer-motion";
import GlowBackground from "../components/GlowBackground";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { whatwedo } from "../data/constants";


export default function Home() {
  return (
    <div>
      {/* Landing section */}
      <div className="h-screen w-full">
        <div className="z-10 w-full absolute h-full flex flex-row justify-evenly items-center">
          <motion.div className="hidden lg:block ">
            <img src="dq_logo.png" alt="Data Questers logo" className="max-w-sm" draggable={false} />
          </motion.div>

          <div className="box max-w-[90%] sm:w-auto flex flex-col justify-center items-center opacity-80 select-none text-white">
            <h1 className="font-semibold text-center text-3xl sm:text-5xl my-3 md:my-6">
              VJ DATA QUESTERS
            </h1>
            <p className="text-base text-center sm:text-xl">VNRVJIET, Hyderabad</p>
            <p className="mt-1 text-xs font-thin sm:text-sm text-center">
              Differentiated by inputs / Integrated by outputs
            </p>
          </div>

        </div>
        <GlowBackground />
        <div className="absolute inset-0 opacity-10 bg-[url('/graph-grid.png')]"></div>
      </div>

      {/* About section */}
      <div className="clip-art-1">
        <div className="z-10 text-justify sm:text-left max-w-5xl mx-auto">
          <div className="lg:hidden">
            <img src="dq_logo.png" className="max-w-64 mx-auto" />
          </div>

          <div className="px-2 pb-20 lg:pt-4">
            <h2 className="text-white pb-3 text-center text-3xl font-semibold flex flex-row items-start justify-center">
              About VJDQ
            </h2>
            <p className="text-white text-base leading-5 sm:text-lg ">
              Welcome to our Data Science Club, the premier hub for data science
              enthusiasts at our college. Established with the vision of driving
              innovation and collaboration, our club serves as the central point
              for all data science-related activities on campus. We provide
              comprehensive guidance on projects, offer certifications for both
              students and faculty, and keep our members informed about the
              latest industry trends and real-world applications of data
              science.
            </p>

            <Link to="/about">
              <button className="rounded-sm w-28 h-8 bg-white text-black border-none hover:bg-white/85 italic mt-8 ">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto my-6 text-center">
        <h2 className="text-3xl font-semibold">What we do?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8 mx-auto">
          {whatwedo.map((d, index) => (
            <Link to={d?.example} key={index} className="mx-auto">
              <div
                className="w-40 h-16 sm:w-60 sm:h-20 px-2 sm:p-4 flex items-center justify-evenly border border-black/50 rounded-lg  bg-white shadow-2xl"
              >
                <img src={d.imgURL} alt="What we do Image" className="w-[20%]" draggable={false} />
                <h3 className="text-sm sm:text-xl text-black font-semibold">
                  {d.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="clip-art-2 bg-[#0f323f] pb-1 pt-4">
        <div className="max-w-6xl text-center mt-16 mb-4 mx-auto  z-10">
          <h2 className="text-3xl text-white m-0">Glimpses</h2>
          <Carousel />
        </div>
      </div>

      {/* <div className="fixed z-[101] bottom-6 right-4 ">
        <PromoDiv
          eventName="DQ Know your domains"
          eventStatus="ongoing"
          eventLink="https://vjdataquesters.vercel.app/know-your-domains"
        />
      </div> */}
    </div>
  );
}
