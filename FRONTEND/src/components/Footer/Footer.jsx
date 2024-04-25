import "./Footer.css";
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-div">
                <div className="footer-left">
                    <p className="footer-name1">VJDQ</p>
                    <p className="footer-name2">VJ Data Questers All Rights Reserved</p>
                </div>
                <div className="profiles">
                    {/* linkedin */}
                    <a href="https://www.linkedin.com/company/vj-data-questers/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
                    </a>
                    {/* insta */}
                    <a href="https://www.instagram.com/vjdataquesters.club/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
                    </a>
                    {/* mail */}
                    <a href="mailto:vjdataquesters@gmail.com" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/48/gmail-new.png" alt="gmail-new" />
                    </a>
                    {/* twitter -x is not  */}
                    {/* <a href="#">
                        <img src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter" />
                    </a> */}
                </div>
            </div>
        </div>
    )
}