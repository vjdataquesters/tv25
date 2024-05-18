import './Team.css'
import React from 'react'
import { faculty, team } from './TeamData'
import Reveal from '../Reveal';

export default function Team() {
    return (
        <div className="team">
            <h1>Who are we?</h1>
            <p>The people behind DQ</p>
            <div className="faculty-div">
                {
                    faculty.map((member, index) => {
                        return (
                            <div key={index} className="faculty-member">
                                <img src={member.image ? 'teamImages/' + member.image : "https://picsum.photos/200"} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        );
                    })
                }
            </div>
            <div className="team-div">
                {team.map((member, index) => {
                    return (
                        <Reveal key={index}>
                            <div key={index} className="team-member">
                                <p className='post-p'>{member.role || "idk"}</p>
                                <img src={member.image ? 'teamImages/' + member.image : "https://picsum.photos/200"} alt={member.name} />
                                <a href={member.linkedin} target='_blank'> <p className='member-name'>{member.name}</p> </a>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    );
}