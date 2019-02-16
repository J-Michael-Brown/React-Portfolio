import React from 'react';
import Portfolio from '../assets/portfolio.js';
import Interest from './Interest';
// import {} from '../css/styles.jsx';

function InterestList(){
  return (
    <div>
      <h3>Technical Interests</h3>
      {Portfolio.technicalInterestList.map((interest, index) =>
        <Interest
          regard={interest.regard}
          notes={interest.notes}
          key={`technical-interest-list-${index}`}
        />
      )}
      <h3>Personal Interests</h3>
      {Portfolio.personalInterestList.map((interest, index) =>
        <Interest
          regard={interest.regard}
          notes={interest.notes}
          key={`personal-interest-list-${index}`}
        />
      )}
    </div>
  );
}

export default InterestList;
