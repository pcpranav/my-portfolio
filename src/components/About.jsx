import React from "react";
import NavBar from "./NavBar";
import Particles from "./Particles";
const resume =
  "https://docs.google.com/document/d/14C2Q-yYAuuMU-Fsdvt4b8ZYVo8h9FIS4vqCpcNefgss/edit?usp=sharing";
const About = () => {
  return (
    <>
      <Particles />
      <NavBar />
      <div className="container main">
        <div className="main-desc"></div>
        <div className="about-desc">
          <h1 className="about-desc-detail">Education Details</h1>
          <hr></hr>
          <ul>
            <li style={{ listStyle: "none" }}>
              <h3>B.E.-Civil Engg from DSCE-Bangalore(VTU)</h3>
            </li>
            <li style={{ listStyle: "none" }}>
              <h3>
                Full Stack Developer Bootcamp(MERN) from Zen Class GUVI(IIT-M
                incubated company)
              </h3>
            </li>
          </ul>
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
          <br></br>
          <br></br>
          <h1 className="about-desc-detail">Contact Details</h1>
          <hr></hr>
          <ul>
            <li style={{ listStyle: "none" }}>
              <h3>
                <i class="fas fa-phone-square-alt"></i> 8709711835 / 9661110672
              </h3>
            </li>
            <li style={{ listStyle: "none" }}>
              <h3>
                <i class="fas fa-envelope-square"></i>pcpranavchandra@gmail.com
              </h3>
            </li>
          </ul>
        </div>
        <br />
      </div>
    </>
  );
};

export default About;
