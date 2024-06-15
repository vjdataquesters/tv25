import { motion } from "framer-motion";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="h1-div flex flex-col justify-center items-center bg-center h-screen w-full">
      <div className="landing-info z-[100] w-screen h-screen flex flex-row justify-center items-center absolute top-0 left-0 bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')]">
        <motion.div className="landing-logo">
          <img src="dq_logo.png" alt="dq_logo" className="w-[70%]" />
        </motion.div>

        <div className="landing-text box flex flex-col justify-center items-center opacity-80 select-none text-white mx=16 my-8 text-4xl uppercase">
          <h1 className="font-semibold text-center">VJ Data Questers</h1>
          <h3>VNR VJIET, hyderabad</h3>
          <p className="mt-1">COLLABORATE | EVOLVE | CONQUER </p>
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
