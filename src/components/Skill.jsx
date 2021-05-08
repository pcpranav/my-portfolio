import React from "react";
import { Line } from "rc-progress";

const Skill = (props) => {
  const { name, percentage, color } = props.skill;
  return (
    <div className="skill" title={`${percentage}%`}>
      <span className="skill-name">{name}</span>
      <Line
        percent={percentage}
        strokeWidth="2"
        trailWidth="2"
        strokeColor={color || "#ffce3b"}
        trailColor="rgba(255,255,255,0.4)"
      />
    </div>
  );
};

export default Skill;
