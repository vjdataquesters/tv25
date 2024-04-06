import "./Header.css";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars.svg"
import React from "react";

const Header = () => {

    const [menu, setMenu] = React.useState(false)
    const handleBarsClick = ()=> setMenu(!menu)

    return (
        <div className="navbar">
            <div className={menu ? 'nav-div active':'nav-div'}>
                <span className="navbar_logo">
                    <Link to='/'>
                        <img src="dq_logo.png" alt="logo" />
                    </Link>
                </span>
               
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
                </ul>

                <div className="contact">
                    <button className="contact-btn">contact us</button>
                </div>
                
                <div className="header-bars" onClick={handleBarsClick}>
                    <img src={Bars} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Header;