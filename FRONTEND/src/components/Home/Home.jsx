import "./Home.css"
import { Link } from "react-router-dom";
export default function Home() {

    const data = [
        {
            title: "Data Science Workshops"
        },
        {
            title: "Hackathons"
        },
        {
            title: "Projects"
        },
        {
            title: "Internships"
        },
        {
            title: "Webinars"
        },
        {
            title: "Competitions"
        }
    ]


    return (
        <div className="home">
            <div className="h1_div">
                <h1>VJ Data Questers</h1>
                <h4>VNR VJIET, hyderabad</h4>
            </div>
            <div className="h2_div">
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
            <div className="h3_div">
                <h2>What we do</h2>
                <div className="h3_cards">
                    {
                        data.map((d) => (
                            <div className="h3_card">
                                <h3>{d.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="h4_div">
                <h2>Glimpses</h2>
                {/* images in grid */}
            </div>
        </div>
    )
}