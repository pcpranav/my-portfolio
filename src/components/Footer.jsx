import React from "react";
import { repoLink } from "../user/user";

const Footer = () => {
  return (
    <div className="container footer-container">
      <ul>
        <li title="GitHub Repo.">
          <a href={repoLink}>
            Project Repo. <i className="fab fa-github"></i>
          </a>
        </li>
        <li> | </li>
        <li> Basic portfolio</li>
      </ul>
    </div>
  );
};

export default Footer;
