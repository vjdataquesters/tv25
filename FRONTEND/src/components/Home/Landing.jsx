import { motion } from "framer-motion";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="h1-div flex flex-col justify-center items-center bg-center h-screen w-full">
      <div className="landing-info z-[100] w-screen h-screen flex flex-row justify-center items-center gap-20 absolute top-0 left-0 bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')]">

        <motion.div className="landing-logo">
          <img src="dq_logo.png" alt="dq_logo" className="w-[70%]" />
        </motion.div>

        <div className="landing-text box w-[90%] sm:w-auto flex flex-col justify-center items-center opacity-80 select-none text-white mx-16 my-8 text-4xl uppercase">
          <h1 className="font-semibold text-center text-3xl sm:text-5xl my-3 md:my-6">VJ Data Questers</h1>
          <p className="text-base sm:text-xl">VNR VJIET, hyderabad</p>
          <p className="mt-1 text-xs sm:text-sm text-center">Differentiated by inputs / Integrated by outputs</p>
        </div>
      </div>

      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g4"></div>
        </div>
      </div>
      <div className="graph-grid absolute w-screen h-screen opacity-10 bg-[url('/graph-grid/graph-grid.png')]"></div>
    </div>
  );
}
