import React from 'react';
import './Contact.css';

export default function Contact(){
    return (
        <div className="contact">
             {/* gform, mailto, linkedin message, insta gram */}

            <div className="contact-container">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/vjdataquesters.club/" target='_blank'>insta us</a> 
                        <img src="linkto.svg" alt="" />
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/vj-data-questers/" target='_blank'>linkedin us</a>
                        <img src="linkto.svg" alt="" />
                    </li>
                    <li>
                        <a href="mailto:vjdataquesters@gmail.com" target='_blank'>mail us</a>
                        <img src="linkto.svg" alt="" />
                    </li>
                </ul>
            </div>
                
        </div>
    )
}