import React from 'react';
import PropTypes from 'prop-types';
import InterestParagraph from './InterestParagraph';
// import {educationStyles} from '../css/styles.jsx';

function Interest(props){
  return (
    <div>
      <h4>{props.regard}</h4>
      {props.notes.map((note, index) =>
        <InterestParagraph
          note={note}
          key={index}
        />
      )}
    </div>
  );
}

Interest.propTypes = {
  regard: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Interest;
