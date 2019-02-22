import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
// import {} from '../css/styles.jsx';

function ProjectList(props){
  return (
    <div>
      {Object.keys(props.projectList).map(function(projectId) {
        let project = props.projectList[projectId];
        return <Project
          githubLink={project.githubLink}
          siteLink={project.siteLink}
          name={project.name}
          blurb={project.blurb}
          key={projectId}
        />;
      })}
    </div>
  );
}

ProjectList.propTypes = {
  // projectList: PropTypes.object.isRequired
  projectList: PropTypes.shape({
    githubLink: PropTypes.string.isRequired,
    siteLink: PropTypes.string,
    name: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectList;
