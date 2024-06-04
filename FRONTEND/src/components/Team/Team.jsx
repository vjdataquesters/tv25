import "./Team.css";
import { faculty, team } from "./TeamData";
import Reveal from "../Reveal";
import { motion } from "framer-motion";
export default function Team() {
  const cardVariants = {
    intial: {
      scale: 1,
      boxShadow: "none",
    },
    hover: {
      scale: 1.025,
      boxShadow: "0px 48px 100px 0px #110c2e26",
    },
    tap: { scale: 0.8 },
  };
  return (
    <div className="team">
      <h1>Who are we?</h1>
      <p>The people behind DQ</p>
      <div className="team-div" >
        {faculty.map((member, index) => {
          return (
            <motion.div
              key={index}
              className="faculty-member team-member"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap">

              <p className="post-p">{member.role}</p>
              <img
                className="faculty-img"
                src={
                  member.image
                    ? "teamImages/" + member.image
                    : "https://picsum.photos/200"
                }
                alt={member.name}
              />
              <p className="member-name">{member.name}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="team-div">
        {team.map((member, index) => {
          return (
            <Reveal key={index}>
              <motion.div
                key={index}
                className="team-member"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                unselectable="on"
              >
                <p className="post-p">{member.role || "idk"}</p>
                <img
                  src={
                    member.image
                      ? "teamImages/" + member.image
                      : "https://picsum.photos/200"
                  }
                  alt={member.name}
                />
                <a href={member.linkedin} target="_blank">
                  <p className="member-name">{member.name}</p>
                </a>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
