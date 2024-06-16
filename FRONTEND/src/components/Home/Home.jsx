import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Landing from "./Landing";
import Reveal from "../Reveal";
import Carousel from "./Carousel";
import { MdOutlineSwitchAccessShortcut } from "react-icons/md";

export default function Home() {
  const buttonVariants = {
    hover: {
      scale: 1.21,
      originX: 0,
      transition: {},
    },
  };
  const cardVariants = {
    intial: {
      scale: 1,
      boxShadow: "none",
    },
    hover: {
      scale: 1.025,
      boxShadow: "0px 48px 100px 0px #110c2e26",
    },
    tap: { scale: 0.8 },
  };
  const homeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };
  const data = [
    {
      title: "Data Science Workshops",
      imgURL:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-data-science-data-analytics-flaticons-lineal-color-flat-icons-5.png",
    },
    {
      title: "Hackathons",
      imgURL:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-hackathon-ux-and-ui-icons-flaticons-lineal-color-flat-icons-2.png",
    },
    {
      title: "Webinars",
      imgURL: "https://img.icons8.com/color/48/video-conference.png",
    },
    {
      title: "Contests",
      imgURL:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-competitions-dance-flaticons-lineal-color-flat-icons.png",
    },
    {
      title: "Guest lectures",
      imgURL:
        "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-seminar-activism-flaticons-flat-flat-icons-2.png",
    },
    {
      title: "Fun events",
      imgURL: "https://img.icons8.com/cotton/64/events--v2.png",
    },
  ];

  return (
    <motion.div
      className="home flex flex-col justify-center items-center"
      variants={homeVariants}
      initial="initial"
      animate="animate"
    >
      <Landing />

      <div className="h2-div-cont w-full px-4 pb-16">
        <div className="iuarfn z-[100] bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')]">
          <Reveal>
            <div className="h2-div flex flex-col lg:flex-row  justify-evenly items-center mx-auto z-10 text-justify sm:text-left w-[90%] sm:w-4/5">
              <div className="h2-left w-4/5 lg:w-full m-0 lg:mr-12 ">
                <img
                  src="dq_logo.png"
                  className="w-full" //fix this
                  alt=""
                />
              </div>

              <div className="h2-right flex flex-col justify-center m-0">
                <h2 className="text-white pb-3 text-center text-2xl font-semibold">About VJDQ</h2>
                <p className="text-white text-base sm:text-lg leading-5">
                  Welcome to our Data Science Club, the premier hub for data
                  science enthusiasts at our college. Established with the
                  vision of driving innovation and collaboration, our club
                  serves as the central point for all data science-related
                  activities on campus. We provide comprehensive guidance on
                  projects, offer certifications for both students and faculty,
                  and keep our members informed about the latest industry trends
                  and real-world applications of data science.
                </p>

                <Link to="about">
                  <motion.button
                    className="rounded-sm w-28 h-8 bg-white text-black border-none cursor-pointer text-base italic mt-8"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    Know More
                  </motion.button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="h3-div-cont my-4">
        <Reveal>
          <div className="w-full lg:w-4/5 mx-auto  text-center bg-white bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')] ">
            <h2 className="text-3xl font-semibold ">What we do?</h2>
            <div className="h3-cards flex flex-row flex-wrap items-center justify-center gap-4 w-full my-8 mx-0">
              {data.map((d, index) => (
                <motion.div
                  key={index}
                  className="h3-card flex w-40 h-16 sm:w-60 sm:h-20 px-2 sm:p-4 items-center justify-evenly border border-black/50 rounded-lg  bg-white shadow-2xl"
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <img src={d.imgURL} alt="img" className="w-[20%]" />
                  <h3 className="text-sm sm:text-xl text-black font-semibold">
                    {d.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h4-div-cont bg-[#0f323f] w-full bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')] p-1 pt-4">
        <Reveal>
          <div className="h4-div flex flex-col justify-center items-center mt-16 mb-4 mx-auto w-[80vw] z-10">
            <h2 className="text-3xl text-white m-0">Glimpses</h2>
            <Carousel />
          </div>
        </Reveal>
      </div>


      {/* Present event promo div */}
      {/* <Link to='events/TECHNOVISTA'>
        <div onClick={()=>console.log('hai')} className="fixed z-[101] bottom-12 right-8 p-4 bg-black/40 border border-black/50 shadow-2xl rounded-lg backdrop-blur-sm ">
            <h1 className='text-white m-auto text-lg sm:text-2xl'>𝕋𝔼ℂℍℕ𝕆𝕍𝕀𝕊𝕋𝔸</h1>
            <span className="flex justify-end items-center gap-1">
              <p className='text-right '>View </p> <MdOutlineSwitchAccessShortcut size={20} color="white"/>
            </span>
        </div>
      </Link> */}
    </motion.div>
  );
}
