import React from 'react';
import Portfolio from '../assets/portfolio.js';
import Interest from './Interest';
// import {} from '../css/styles.jsx';

function InterestList(){
  return (
    <div>
      {Portfolio.interestList.map((interest, index) =>
        <Interest
          regard={interest.regard}
          note={interest.note}
          key={`interest-list-${index}`}
        />
      )}
    </div>
  );
}

export default InterestList;
