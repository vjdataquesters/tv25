import "./Home.css"
import { Link } from "react-router-dom";
import img1 from "../../assets/homeimages/img1.jpg"
import img2 from "../../assets/homeimages/img2.jpg"
import img3 from "../../assets/homeimages/img3.jpg"
import img4 from "../../assets/homeimages/img4.jpg"
import img5 from "../../assets/homeimages/img5.jpg"
import img6 from "../../assets/homeimages/img6.jpg"

const homeimages = [img1, img2, img3, img4, img5, img6]

export default function Home() {

    const data = [
        {
            title: "Data Science Workshops",
            imgURL:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-data-science-data-analytics-flaticons-lineal-color-flat-icons-5.png"
        },
        {
            title: "Hackathons",
            imgURL:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-hackathon-ux-and-ui-icons-flaticons-lineal-color-flat-icons-2.png"

        },
        {
            title: "Webinars",
            imgURL:"https://img.icons8.com/color/48/video-conference.png"
        },
        {
            title: "Competitions",
            imgURL:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-competitions-dance-flaticons-lineal-color-flat-icons.png"
        }
    ]


    return (
        <div className="home">
            <div className="h1_div">
                <h1>VJ Data Questers</h1>
                <h4>VNR VJIET, hyderabad</h4>
                <br />
                <h3>LEARN IMPLEMENT COLLABORATE</h3>
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
                <h2>What we do?</h2>
                <div className="h3_cards">
                    {
                        data.map((d,index) => (
                            <div key={index} className="h3_card">
                            <img width="58" height="58" src={d.imgURL} alt="img"/>
                                <h3>{d.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="h4_div">
                <h2>Glimpses</h2>
                <div className="h4-images">
                    {
                        homeimages.map((img, index) => (
                            <div key={index} className={"gallery__item--"+(index+1)}>
                            <img src={img} key={index} className="h4-img" alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}