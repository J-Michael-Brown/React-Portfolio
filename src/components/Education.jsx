import React from 'react';
import PropTypes from 'prop-types';
import EducationSkill from './EducationSkill';
// import {educationStyles} from '../css/styles.jsx';

function Education(props){
  return (
    <div>
      <h4>{props.institution}</h4>
      <ul>
        {props.skills.map((skill, index) =>
          <EducationSkill
            skill={skill}
            key={`edu-skill-${index}`}
          />
        )}
      </ul>
    </div>
  );
}

Education.propTypes = {
  institution: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Education;
