import React from 'react';
import Education from './Education';
import PropTypes from 'prop-types';
// import {} from '../css/styles.jsx';

function EducationList(props){
  return (
    <div>
      {Object.keys(props.educationList).map(function(educationId) {
        let education = props.educationList[educationId];
        return <Education
          institution={education.institution}
          skills={education.skillsGained}
          key={educationId}
        />;
      })}
    </div>
  );
}

EducationList.propTypes = {
  educationList: PropTypes.objectOf(PropTypes.shape({
    institution: PropTypes.string.isRequired,
    skillsGained: PropTypes.arrayOf(PropTypes.string)
  }).isRequired).isRequired
};

export default EducationList;
