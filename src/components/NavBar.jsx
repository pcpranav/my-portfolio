import React from "react";
import { Link } from "react-router-dom";
import {
  githubLink,
  //linkedinLink,
  // twitterLink,
  // fiverrLink,
} from "../user/user";

const NavBar = () => {
  return (
    <div className="container navbar">
      {/* Left Side */}
      <div className="navbar-left">
        <Link to="/home">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
      {/* Right Side */}
      <div className="navbar-right">
        <a
          href={githubLink}
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        {/* <a href={twitterLink}>
          <i className="fab fa-twitter"></i>
        </a> */}
        {/* <a href={linkedinLink} title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a> */}
        {/* <a href={fiverrLink} title="Fiverr">
          <i className="fas fa-handshake"></i>
        </a> */}
      </div>
    </div>
  );
};

export default NavBar;
