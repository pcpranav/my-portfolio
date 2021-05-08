import React from "react";
import { langs } from "../user/user";
import NavBar from "./NavBar";
import Skill from "./Skill";
import Particles from "./Particles";

const Skills = () => {
  return (
    <>
      <Particles />
      <NavBar />
      <div
        className="container skills-container"
        id="skills-section"
        style={{ minHeight: "92vh" }}
      >
        <span className="skills-title">Skills</span>
        <div className="skills">
          {langs.map((skill) => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
