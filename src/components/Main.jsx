import React from "react";
import { userName, mainDesc, aboutDesc } from "../user/user";
import NavBar from "./NavBar";
import Particles from "./Particles";

const resume =
  "https://docs.google.com/document/d/14C2Q-yYAuuMU-Fsdvt4b8ZYVo8h9FIS4vqCpcNefgss/edit?usp=sharing";
const Main = () => {
  return (
    <>
      <Particles />
      <NavBar />
      <div className="container main">
        <div className="main-desc">
          <span
            className="roboto-mono-family"
            style={{ marginTop: "2rem" }}
          >{`Hi! I'm ${userName}.`}</span>
          <span
            className="roboto-mono-family"
            style={{ marginTop: "2rem" }}
          >{`<${mainDesc}/>`}</span>
        </div>
        <div className="about-desc">
          {/* <i className="fas fa-quote-left"></i> */}
          <h3 className="about-desc-detail">{aboutDesc}</h3>
          {/* <i className="fas fa-quote-right"></i> */}
          <br />
          <br />

          <h3>
            <a
              title="Download Resume"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i>Resume
            </a>
          </h3>
        </div>
        <br />
      </div>
      {/* <Skills />
      <Projects />
      <Footer /> */}
    </>
  );
};

export default Main;
