import React from 'react';
import Interest from './Interest';
import PropTypes from 'prop-types';
// import {} from '../css/styles.jsx';

function InterestList(props){
  return (
    <div>
      <h3>Technical Interests</h3>
      {Object.keys(props.technicalInterestList).map(function(interestId, index) {
        let interest = props.technicalInterestList[interestId];
        return <Interest
        regard={interest.regard}
        notes={interest.notes}
        key={`${interestId}-${index}`}
        />
      })}
      <h3>Personal Interests</h3>
      {Object.keys(props.personalInterestList).map(function(interestId, index) {
        let interest = props.personalInterestList[interestId];
        return <Interest
        regard={interest.regard}
        notes={interest.notes}
        key={`${interestId}-${index}`}
        />
      })}
    </div>
  );
}

InterestList.propTypes = {
  personalInterestList: PropTypes.object.isRequired,
  technicalInterestList: PropTypes.object.isRequired
}

export default InterestList;
