import React from 'react';
import PropTypes from 'prop-types';
// import {educationStyles} from '../css/styles.jsx';

function Project(props){
  let projectName;
  if(props.siteLink){
    projectName = <a href={props.siteLink}>{props.name}</a>;
  } else {
    projectName = props.name;
  }
  return (
    <div>
      <h4>{projectName}</h4>
      <p>(<a href={props.githubLink}>source</a>) - {props.blurb}</p>
    </div>
  );
}

Project.propTypes = {
  githubLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  siteLink: PropTypes.string
};

export default Project;
