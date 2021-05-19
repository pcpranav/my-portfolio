import React from "react";

const Project = (props) => {
  const { title, desc, demo, repo, src, alt } = props.project;
  return (
    <div className="project shadow">
      <span className="project-title">{title}</span>{" "}
      <div className="project-desc">{desc}</div>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <img src={src} alt={alt} className="images" />
      </div>
      <div style={{ textAlign: "center" }}>
        {demo ? (
          <a href={demo} title="Demo" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-desktop" style={{ padding: "0 1rem" }}></i>
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
