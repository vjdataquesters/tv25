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
      className="home"
      variants={homeVariants}
      initial="initial"
      animate="animate"
    >
      <Landing />

      <div className="h2-div-cont">
        <div className="iuarfn">
          <Reveal>
            <div className="h2-div">
              <div className="h2-left w-full">
                <img src="dq_logo.png" alt="" />
              </div>
              <div className="h2-right">
                <h2>About VJDQ</h2>
                <p>
                  Welcome to our Data Science Club, the premier hub for data science enthusiasts at our college. Established with the vision of driving innovation and collaboration, our club serves as the central point for all data science-related activities on campus. We provide comprehensive guidance on projects, offer certifications for both students and faculty, and keep our members informed about the latest industry trends and real-world applications of data science.

                </p>
                {/* <p>
                Our club hosts a variety of events, including expert-led guest lectures, hands-on workshops, and collaborative projects, ensuring a dynamic and engaging learning environment. By fostering strong connections with industry leaders, we bridge the gap between academic knowledge and practical experience, preparing our members to excel in the ever-evolving field of data science. Join us in our mission to uphold the highest standards of academic and technical integrity, and be part of a community dedicated to shaping the future of data science.
                </p> */}
                <Link to="about">
                  <motion.button
                    className="know-more-btn"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                  >
                    Know More
                  </motion.button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="h3-div-cont">
        <Reveal>
          <div className="h3-div">
            <h2 className="text-3xl font-semibold">What we do?</h2>
            <div className="h3-cards">
              {data.map((d, index) => (
                <motion.div
                  key={index}
                  className="h3-card "
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <img src={d.imgURL} alt="img" />
                  <h3 className="text-sm sm:text-xl text-black font-semibold">{d.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h4-div-cont">
        <Reveal>
          <div className="h4-div">
            <h2 className="text-3xl">Glimpses</h2>
            <Carousel />
          </div>
        </Reveal>
      </div>

      <Link to='events/TECHNOVISTA'>
        <div onClick={()=>console.log('hai')} className="fixed z-[101] bottom-12 right-8 p-4 bg-black/40 border border-black/50 shadow-2xl rounded-lg backdrop-blur-sm ">
            <h1 className='text-white m-auto text-lg sm:text-2xl'>𝕋𝔼ℂℍℕ𝕆𝕍𝕀𝕊𝕋𝔸</h1>
            <span className="flex justify-end items-center gap-1">
              <p className='text-right '>View </p> <MdOutlineSwitchAccessShortcut size={20} color="white"/>
            </span>
        </div>
      </Link>
      
    </motion.div>
  );
}
