import React from 'react';
import InterestList from './InterestList';
import PropTypes from 'prop-types';

function InterestListList(props) {

  return(
    <div>
      {Object.keys(props.interestListList).map(function(interestListId) {
        let interestList = props.interestListList[interestListId];
        return(<InterestList
          interestFieldCategory={interestList.interestFieldCategory}
          interestFieldContent={interestList.interestFieldContent}
          key={interestListId}
        />);
      })}
    </div>
  );
}

InterestListList.propTypes = {
  interestListList: PropTypes.objectOf(
    PropTypes.shape({
      interestFieldCategory: PropTypes.string,
      interestFieldContent: PropTypes.arrayOf(
        PropTypes.shape({
          regard: PropTypes.string.isRequired,
          notes: PropTypes.arrayOf(PropTypes.string.isRequired)
        }).isRequired
      ).isRequired
    })
  )
};

export default InterestListList;
