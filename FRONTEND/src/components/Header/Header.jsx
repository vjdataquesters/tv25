import "./Header.css";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars.svg"
import React, { useState } from "react";

const Header = () => {

    const [menu, setMenu] = useState(false)
    const [about, setAbout] = useState(false)
    const handleBarsClick = () => setMenu(!menu)
    const handleaboutclick = () => setAbout(about)
    return (
        <div className="navbar">
            {/* header */}
            <div className="nav-div">
                <div>
                    {/* div required to maintain flex */}
                </div>
                <ul className={menu ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" onClick={handleBarsClick} className='nav-link'>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className=" nav-item about-dropdown">
                        <p onClick={handleaboutclick} className="dropbtn">About ▾</p>
                        <ul className="dropdown-content">
                            <li>
                                <Link to="about" onClick={handleBarsClick} className='nav-link'>
                                    <p>About us</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="about" onClick={handleBarsClick} className='nav-link'>
                                    <p>Testimonials</p>
                                </Link>
                            </li>
                        </ul>
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
                    <li className="nav-item">
                        <Link to="contact" onClick={handleBarsClick} className='nav-link'>
                            <p>Contact</p>
                        </Link>
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