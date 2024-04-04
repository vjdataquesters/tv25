import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="navbar">
            <div className="nav-div">

                <div className="navbar_logo">
                    <img src="dq_logo.png" alt="logo" />
                </div>
                <div className="page_links">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/events">Events</Link></div>
                    <div><Link to="/team">Team</Link></div>
                </div>
                <div className="contact">
                    <button className="contact-btn">contact us</button>
                </div>
            </div>
        </div>
    )
}
export default Header;