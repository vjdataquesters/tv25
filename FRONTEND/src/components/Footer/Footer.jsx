import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-div">
                <div className="footer-left">
                    <p className="footer-name1">VJDQ</p>
                    <p className="footer-name2">VJ Data Questers All Rights Reserved</p>
                    <FaRegCopyright size={15} color="white" />
                </div>
                <div className="profiles flex flex-row">
                    <a href="https://www.linkedin.com/company/vj-data-questers/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={24} color="white"/>
                    </a>
                    <a href="https://www.instagram.com/vjdataquesters.club/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare size={24} color="white"/>
                    </a>
                    <a href="mailto:vjdataquesters@gmail.com" target="_blank" rel="noreferrer">
                        <MdEmail size={24} color="white"/>
                    </a>
                </div>
            </div>
        </div>
    )
}