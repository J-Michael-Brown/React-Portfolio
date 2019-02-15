import React from 'react';
import Portfolio from '../assets/portfolio.js';
import Project from './Project';
// import {} from '../css/styles.jsx';

function ProjectList(){
  return (
    <div>
      {Portfolio.projectList.map((project, index) =>
        <Project
          githubLink={project.githubLink}
          siteLink={project.siteLink}
          name={project.name}
          blurb={project.blurb}
          key={`project-list-${index}`}
        />
      )}
    </div>
  );
}

export default ProjectList;
