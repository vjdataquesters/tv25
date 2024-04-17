import './Team.css'
import React from 'react'
import data from './TeamData'
import Reveal from '../Reveal';

export default function Team() {
    return (
        <div className="team">
            <div className="faculty-div">
                <h2>Who are we?</h2>
                <p>The people behind DQ</p>
            </div>
            <div className="team-div">
                {data.map((member, index) => {
                    return (
                        <Reveal>

                        <div key={index} className="team-member">
                            <img src={'teamImages/' + member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    );
}