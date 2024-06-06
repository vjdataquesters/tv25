import './About.css';
import Reveal from '../Reveal'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function About() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        let element = document.getElementById(location.hash.slice(1))
        if (element) {
          element.scrollIntoView({behavior: "smooth"})
        }
      } else {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
      }
    }, [location,]);

    return (
        <div className="about my-[4.5rem] w-[85%] mx-auto flex flex-col gap-10 scroll-smooth">
            <div>
                <div className='py-4'>
                    <h1 className='text-center text-3xl font-extrabold sm:text-5xl '>The hub for data science enthusiasts</h1>
                    <p className='text-center text-md sm:text-xl'>Driving innovation and collaboration through projects, certifications, and industry insights.</p>
                </div>

            </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-10 sm:gap-20 '>
                <div className='text-center '>
                    <p className='text-2xl font-semibold'> 200+ </p>
                    <p className='text-xl'> Members</p>
                </div>
                <div className='text-center '>
                    <p className='text-2xl font-semibold'> 15+ </p>
                    <p className='text-xl '> Events</p>
                </div>
                <div className='text-center  '>
                    <p className='text-2xl font-semibold'> 30+ </p>
                    <p className='text-xl'> Core members</p>
                </div>
                <div className='text-center  '>
                    <p className='text-2xl font-semibold'> 30+ </p>
                    <p className='text-xl '> Alumni</p>
                </div>
            </div>

            <div className='m-auto my-4 flex gap-8 items-center px-6 py-4 border-black/40 border-2 rounded-lg'>
                <p>Follow us on</p>
                <div className='flex flex-row gap-4 justify-evenly items-center'>
                <a href="https://www.linkedin.com/company/vj-data-questers/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={32}/>
                    </a>
                    <a href="https://www.instagram.com/vjdataquesters.club/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare size={32}/>
                    </a>
                    <a href="mailto:vjdataquesters@gmail.com" target="_blank" rel="noreferrer">
                        <SiGmail size={32}/>
                    </a>
                </div>
            </div>

            <div>
                <Reveal>
                    <p>Welcome to our Data Science Club, the premier hub for data science enthusiasts at our college. Established with the vision of driving innovation and collaboration, our club serves as the central point for all data science-related activities on campus. We provide comprehensive guidance on projects, offer certifications for both students and faculty, and keep our members informed about the latest industry trends and real-world applications of data science.
                    </p>
                    <p>
                        Our club hosts a variety of events, including expert-led guest lectures, hands-on workshops, and collaborative projects, ensuring a dynamic and engaging learning environment. By fostering strong connections with industry leaders, we bridge the gap between academic knowledge and practical experience, preparing our members to excel in the ever-evolving field of data science. Join us in our mission to uphold the highest standards of academic and technical integrity, and be part of a community dedicated to shaping the future of data science.
                    </p>
                </Reveal>
            </div>

            <div className='flex flex-col sm:flex-row w-full gap-4 my-8'>
                <div className="mission w-full sm:w-1/2 p-4 rounded-xl border-2 border-black/20 hover:backdrop-blur-sm">
                    <Reveal>
                        <h2>Vision</h2>
                        <p>
                            To be the foremost hub for Data Science excellence, continually driving innovation and collaboration within our college community. We strive to create an environment where students and faculty can engage deeply with cutting-edge research and practical applications of Data Science. By fostering strong connections with industry leaders, we aim to bridge the gap between academic knowledge and real-world practice. Our vision includes being a leader in disseminating the latest trends and advancements in Data Science. Ultimately, we aspire to empower our members to be at the forefront of technological advancements and research in Data Science.
                        </p>
                    </Reveal>
                </div>
                <div className="mission w-full sm:w-1/2 p-4 rounded-xl border-2 border-black/20 hover:backdrop-blur-sm">
                    <Reveal>
                        <h2>Mission</h2>
                        <p>
                            Our mission is to sustain and expand a thriving Data Science community by offering comprehensive guidance on various projects and providing certifications for students and faculty. We are dedicated to keeping our members abreast of industry trends and the practical implications of data in the real world through regular workshops, seminars, and guest lectures. By promoting active participation and collaboration, we aim to foster a culture of continuous learning and innovation. We ensure access to cutting-edge resources and tools that enable our members to excel in their data-driven endeavors. Our commitment is to uphold the highest standards of academic and technical integrity, preparing our members to lead and succeed in the dynamic field of Data Science.</p>
                    </Reveal>
                </div>
            </div>
            <div  id='foundersblock'>
                Founders block
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci at nulla provident asperiores. Hic magni, rem nulla illum quas corporis blanditiis ea exercitationem nam facilis? Sit maxime modi ab?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae eum incidunt illum enim perferendis nam quaerat et numquam pariatur beatae recusandae nesciunt facilis, cum iste, labore aspernatur ab quam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci aliquid dolores dicta quos? Alias numquam illo ipsa a asperiores voluptas, incidunt reiciendis placeat rem culpa, ad explicabo et soluta?
                </p>
            </div>
        </div>

    )
}