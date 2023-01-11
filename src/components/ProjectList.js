import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const links = projects.map(project => {
    // console.log(project)
    <a href={project.name} key={project.id}></a>
    return <ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={project.id}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        { links }
      </div>
    </div>
  );
}

export default ProjectList;
