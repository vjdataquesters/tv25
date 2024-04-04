import "./Footer.css";
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-div">
                <div className="footer-left">
                    <p>©2024 VJDQ. All rights reserved</p>
                </div>
                <div className="profiles">
                    <a href="https://www.linkedin.com/company/vj-data-questers/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://www.linkedin.com/company/vj-data-questers/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
                    </a>
                    <a href="mailto:vjdataquesters@gmail.com" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/48/gmail-new.png" alt="gmail-new" />
                    </a>
                    {/* twitter -x */}
                    <a href="#">
                        <img src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter" />
                    </a>
                </div>
            </div>
        </div>
    )
}