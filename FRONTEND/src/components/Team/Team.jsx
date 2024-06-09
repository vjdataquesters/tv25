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
    }
  };
  return (
    <div className="team">
      <h1 className="font-semibold ">Who are we?</h1>
      <p>The people behind DQ</p>
      <div className="team-div" >
        {faculty.map((member, index) => {
          return (
            <motion.div
              key={index}
              className="faculty-member team-member bg-black/10 hover:bg-black/15 transitiona-all duration-300 ease-in-out"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="hover">

              <p className="post-p">{member.role}</p>
              <img
                className="faculty-img w-48 h-48 rounded-[20%] m-4"
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
          );
        })}
      </div>
      <div className="team-div">
        {team.map((member, index) => {
          return (
            <Reveal key={index}>
              <motion.div
                key={index}
                className="team-member bg-black/5 hover:bg-black/10"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                whileTap="hover"
                unselectable="on"
              >
                <p className="post-p">{member.role || "idk"}</p>
                <img
                  className="faculty-img w-40 h-40 rounded-[20%] m-4"
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
