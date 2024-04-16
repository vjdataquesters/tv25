import "./Header.css";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars.svg"
import React from "react";

const Header = () => {

    const [menu, setMenu] = React.useState(false)
    const handleBarsClick = () => setMenu(!menu)

    return (
        <div className="navbar">
            {/* header */}
            <div className="nav-div">
                {/* container */}
                <div>
                    {/* div required to maintain flex */}
                </div>
                <ul className={menu ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" onClick={handleBarsClick} className='nav-link'>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" onClick={handleBarsClick} className='nav-link'>
                            <p>About</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="events" onClick={handleBarsClick} className='nav-link'>
                            <p>Events</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="team" onClick={handleBarsClick} className='nav-link'>
                            <p>Team</p>
                        </Link>
                    </li>
                    <li className="contact">
                        {/* link to permanently opened g form - temporarily */}
                        <a href="/" rel="noreferrer">
                            <button className="contact-btn">contact us</button>
                        </a>
                    </li>

                </ul>

                <div className="header-bars" onClick={handleBarsClick}>
                    <img src={Bars} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Header;