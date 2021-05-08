import React from "react";
import Project from "./Project";
import { projects } from "../user/user";
import NavBar from "./NavBar";
import Particles from "./Particles";

const Projects = () => {
  return (
    <>
      <Particles />

      <NavBar />
      <div
        className="container projects-container"
        id="projects-section"
        style={{ minHeight: "92vh" }}
      >
        <span className="projects-title">Projects</span>
        <div className="projects">
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
