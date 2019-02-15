import React from 'react';
import PropTypes from 'prop-types';
// import {educationStyles} from '../css/styles.jsx';

function EducationSkill(props){
  return (
    <div>
      {props.skill}
    </div>
  );
}

EducationSkill.propTypes = {
  skill: PropTypes.string.isRequired
};

export default EducationSkill;
