import React from 'react';
import PropTypes from 'prop-types';
// import {educationStyles} from '../css/styles.jsx';

function Project(props){
  return (
    <div>
      <h4 href={props.siteLink}>{props.name}</h4>
      <p>(<span href={props.githubLink}>source</span>) - {props.blurb}</p>
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
