import React from "react";

const Project = (props) => {
  const { title, desc, demo, repo } = props.project;
  return (
    <div className="project shadow">
      <span className="project-title">{title}</span>

      <br></br>
      <div className="project-desc">{desc}</div>
      <br></br>
      <div style={{ textAlign: "center" }}>
        {demo ? (
          <a href={demo} title="Demo" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-desktop"></i>
          </a>
        ) : (
          ""
        )}
        <a
          href={repo}
          title="Code/Repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
