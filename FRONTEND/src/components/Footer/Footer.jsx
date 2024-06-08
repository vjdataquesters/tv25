import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-div">
                <div className="footer-left">
                    <FaRegCopyright size={15} color="white" />
                    <p className="footer-name1">VJDQ</p>
                    <p className="footer-name2">VJ Data Questers All Rights Reserved</p>
                </div>
                <div className="profiles flex flex-row items-center">
                    <a href="https://www.linkedin.com/company/vj-data-questers/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" />
                    </a>
                    <a href="https://www.instagram.com/vjdataquesters.club/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="" />
                    </a>
                    <a href="mailto:vjdataquesters@gmail.com" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}