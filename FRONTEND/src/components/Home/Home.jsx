import "./Home.css"
import { Link } from "react-router-dom";


import Landing from "./Landing";
import Reveal from "../Reveal";
import Carousel from "./Carousel";


export default function Home() {

    const data = [
        {
            title: "Data Science Workshops",
            imgURL: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-data-science-data-analytics-flaticons-lineal-color-flat-icons-5.png"
        },
        {
            title: "Hackathons",
            imgURL: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-hackathon-ux-and-ui-icons-flaticons-lineal-color-flat-icons-2.png"

        },
        {
            title: "Webinars",
            imgURL: "https://img.icons8.com/color/48/video-conference.png"
        },
        {
            title: "Contests",
            imgURL: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-competitions-dance-flaticons-lineal-color-flat-icons.png"
        },
        {
            title: "Guest lectures",
            imgURL: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-seminar-activism-flaticons-flat-flat-icons-2.png"
        },
        {
            title: "Fun events",
            imgURL: "https://img.icons8.com/cotton/64/events--v2.png"
        }
    ]


    return (
        <div className="home">
            <Landing />

            <div className="h2-div-cont">
                <Reveal>
                    <div className="h2-div">
                        <div className="h2-left">
                            <img src="dq_logo.png" alt="" />

                        </div>
                        <div className="h2-right">

                            <h2>About VJDQ</h2>
                            <p>Our vision is to create a community of data enthusiasts who are passionate about data science and its applications. We aim to provide a platform for students to learn, explore and implement data science concepts.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam enim placeat commodi voluptatibus culpa, deserunt obcaecati temporibus. Veritatis maiores numquam molestias autem aperiam dicta quam obcaecati optio alias aut!</p>
                            <Link to='about'> <button>Know More</button> </Link>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="h3-div-cont">
                <Reveal>
                    <div className="h3-div">
                        <h2>What we do?</h2>
                        <div className="h3-cards">
                            {
                                data.map((d, index) => (
                                    <div key={index} className="h3-card">
                                        <img src={d.imgURL} alt="img" />
                                        <h3>{d.title}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="h4-div-cont">
                <Reveal>
                    <div className="h4-div">
                        <h2>Glimpses</h2>
                        <Carousel />
                    </div>
                </Reveal>
            </div>

        </div>
    )
}