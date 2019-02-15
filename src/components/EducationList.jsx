import React from 'react';
import Portfolio from '../assets/portfolio.js';
import Education from './Education';
// import {} from '../css/styles.jsx';

function EducationList(){
  return (
    <div>
      {Portfolio.educationList.map((education, index) =>
        <Education
          institution={education.institution}
          skills={education.skillsGained}
          key={`eduList-${index}`}
        />
      )}
    </div>
  );
}

export default EducationList;
