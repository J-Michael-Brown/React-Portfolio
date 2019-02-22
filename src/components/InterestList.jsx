import React from 'react';
import Interest from './Interest';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
// import {} from '../css/styles.jsx';

function InterestList(props){
  return (
    <div>
      <h3>{props.interestFieldCategory}</h3>
      {props.interestFieldContent.map((interest) =>
        <Interest
          regard={interest.regard}
          notes={interest.notes}
          key={v4()}
        />
      )}
    </div>
  );
}

InterestList.propTypes = {
  interestFieldCategory: PropTypes.string,
  interestFieldContent: PropTypes.arrayOf(
    PropTypes.shape({
      regard: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(PropTypes.string.isRequired)
    }).isRequired
  ).isRequired
};

export default InterestList;
