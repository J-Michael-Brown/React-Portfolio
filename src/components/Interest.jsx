import React from 'react';
import PropTypes from 'prop-types';
// import {educationStyles} from '../css/styles.jsx';

function Interest(props){
  return (
    <div>
      <h4>{props.regard}</h4>
      <p>{props.note}</p>
    </div>
  );
}

Interest.propTypes = {
  regard: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default Interest;
