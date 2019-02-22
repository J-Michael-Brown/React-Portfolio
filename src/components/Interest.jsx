import React from 'react';
import PropTypes from 'prop-types';
import InterestParagraph from './InterestParagraph';
import {v4} from 'uuid';
// import {educationStyles} from '../css/styles.jsx';

function Interest(props){
  return (
    <div>
      <h4>{props.regard}</h4>
      {props.notes.map((note) =>
        <InterestParagraph
          note={note}
          key={v4()}
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
