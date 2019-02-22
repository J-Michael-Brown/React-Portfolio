import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import {v4} from 'uuid';
// import {} from '../css/styles.jsx';

function ProjectList(props){
  return (
    <div>
      {props.projectList.map((project) =>
        <Project
          githubLink={project.githubLink}
          siteLink={project.siteLink}
          name={project.name}
          blurb={project.blurb}
          key={v4()}
        />
      }
    </div>
  );
}

ProjectList.propTypes = {
  // projectList: PropTypes.object.isRequired
  projectList: PropTypes.arrayOf(PropTypes.shape({
    githubLink: PropTypes.string.isRequired,
    siteLink: PropTypes.string,
    name: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default ProjectList;
