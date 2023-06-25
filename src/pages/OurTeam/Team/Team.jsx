import React from "react";
import { motion } from "framer-motion";
import "./Team.css";


const textAnimation = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};


const Team = ({ team }) => {
  return (
    <div className="team">
      <h1>{team.name}</h1>
      <h3>{team.position}</h3>
      <div className="team-description">
        <img src={team.imgUrl} width={650} />
        <motion.p
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        custom={1}
        >{team.biograpy}</motion.p>
      </div>
    </div>
  );
};

export default Team;
