import React from 'react';
import PropTypes from 'prop-types';
// import {educationStyles} from '../css/styles.jsx';

function Education(props){
  return (
    <div>
      <h4>{props.institution}</h4>
      <ul>
        {props.skills.map((skill) =>
          <li>{skill}</li>
        )}
      </ul>
    </div>
  );
}

Education.propTypes = {
  institution: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
};

export default Education;
