import React from 'react';
import PropTypes from 'prop-types';
// import {educationStyles} from '../css/styles.jsx';

function InterestParagraph(props){
  return (
    <div>
      <p style={{marginBottom: '10px'}}>{props.note}</p>
    </div>
  );
}

InterestParagraph.propTypes = {
  note: PropTypes.string.isRequired
};

export default InterestParagraph;
