import './About.css';
import Reveal from '../Reveal';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export default function About() {
    const location = useLocation();
    const [mem, setMem] = useState(200); // Example value
    const [events, setEvents] = useState(10); // Example value
    const [core, setCore] = useState(30); // Example value
    const [alumni, setAlumni] = useState(60); // Example value

    const boxVariants = {
        initial: {
            scale: 1,
        },
        hover: {
            scale: 1.025,
            boxShadow: "0px 48px 100px 0px #110c2e26",
        }
    };

    useEffect(() => {
        if (location.hash) {
            let element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="about mx-auto mt-[4.5rem] flex flex-col scroll-smooth">
            <div className='min-h-[calc(100vh-4.5rem)] py-10 sm:py-16 flex flex-col justify-between '>
                <div className='w-[85%] mx-auto '>
                    <div className=''>
                        <h1 className='text-center text-4xl font-extrabold sm:text-7xl'>The hub for data science enthusiasts</h1>
                        <p className='text-center text-md sm:text-xl'>Driving innovation and collaboration through projects, certifications, and industry insights.</p>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center gap-10 sm:gap-20'>
                    <motion.div className='text-center w-36'>
                        <CountUp className='text-5xl sm:text-7xl font-semibold' end={mem} duration={5} suffix="+" />
                        <p className='sm:text-xl'> Members</p>
                    </motion.div>
                    <div className='text-center w-36'>
                        <CountUp className='text-5xl sm:text-7xl font-semibold' end={events} duration={5} suffix="+" />
                        <p className='sm:text-xl'> Events</p>
                    </div>
                    <div className='text-center w-36'>
                        <CountUp className='text-5xl sm:text-7xl font-semibold' end={core} duration={5} suffix="+" />
                        <p className='sm:text-xl'> Core members</p>
                    </div>
                    <div className='text-center w-36'>
                        <CountUp className='text-5xl sm:text-7xl font-semibold' end={alumni} duration={5} suffix="+" />
                        <p className='sm:text-xl'> Alumni</p>
                    </div>
                </div>

                <motion.div className='m-auto my-4 flex gap-8 items-center px-6 py-4 border-black/40 border-2 rounded-lg' variants={boxVariants} initial="initial" whileHover="hover" whileTap="hover">
                    <p>Follow us on</p>
                    <div className='flex flex-row gap-4 justify-evenly items-center'>
                        <a href="https://www.linkedin.com/company/vj-data-questers/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" className='w-10' alt="" />
                        </a>
                        <a href="https://www.instagram.com/vjdataquesters.club/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" className='w-10' alt="" />
                        </a>
                        <a href="mailto:vjdataquesters@gmail.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" className='w-10' alt="" />
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className='about-content flex items-center flex-col py-16 '>
                <motion.div className='w-[85%] px-4 py-4 mb-6 border border-white/40  rounded-2xl bg-[#0e303d]' variants={boxVariants} initial="initial" whileHover="hover" whileTap="hover">
                    <h2 className='text-white'>About us</h2>
                    <Reveal>
                        <p className='text-md text-white'>
                            Welcome to our Data Science Club, the premier hub for data science enthusiasts at our college. Established with the vision of driving innovation and collaboration, our club serves as the central point for all data science-related activities on campus. We provide comprehensive guidance on projects, offer certifications for both students and faculty, and keep our members informed about the latest industry trends and real-world applications of data science.
                        </p>
                        <p className='text-md'>
                            Our club hosts a variety of events, including expert-led guest lectures, hands-on workshops, and collaborative projects, ensuring a dynamic and engaging learning environment. By fostering strong connections with industry leaders, we bridge the gap between academic knowledge and practical experience, preparing our members to excel in the ever-evolving field of data science. Join us in our mission to uphold the highest standards of academic and technical integrity, and be part of a community dedicated to shaping the future of data science.
                        </p>
                    </Reveal>
                </motion.div>

                <div className='flex flex-col w-[85%] sm:flex-row gap-6 mb-8 '>
                    <motion.div className="mission w-full sm:w-1/2 p-4 rounded-xl border border-white/40 hover:backdrop-blur-sm bg-[#0e303d]" variants={boxVariants} initial="initial" whileHover="hover" whileTap="hover">
                        <Reveal>
                            <h2 className='text-white'>Vision</h2>
                            <p className='text-md'>
                                To be the foremost hub for Data Science excellence, continually driving innovation and collaboration within our college community. We strive to create an environment where students and faculty can engage deeply with cutting-edge research and practical applications of Data Science. By fostering strong connections with industry leaders, we aim to bridge the gap between academic knowledge and real-world practice. Our vision includes being a leader in disseminating the latest trends and advancements in Data Science. Ultimately, we aspire to empower our members to be at the forefront of technological advancements and research in Data Science.
                            </p>
                            <p>{"‎"}</p>
                            <p>{"‎"}</p>
                        </Reveal>
                    </motion.div>
                    <motion.div className="mission w-full sm:w-1/2 p-4 rounded-xl border  border-white/40 hover:backdrop-blur-sm bg-[#0e303d]" variants={boxVariants} initial="initial" whileHover="hover" whileTap="hover">
                        <Reveal>
                            <h2 className='text-white'>Mission</h2>
                            <p className='text-md text-white'>
                                Our mission is to sustain and expand a thriving Data Science community by offering comprehensive guidance on various projects and providing certifications for students and faculty. We are dedicated to keeping our members abreast of industry trends and the practical implications of data in the real world through regular workshops, seminars, and guest lectures. By promoting active participation and collaboration, we aim to foster a culture of continuous learning and innovation. We ensure access to cutting-edge resources and tools that enable our members to excel in their data-driven endeavors. Our commitment is to uphold the highest standards of academic and technical integrity, preparing our members to lead and succeed in the dynamic field of Data Science.
                            </p>
                        </Reveal>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
