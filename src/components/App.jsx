/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import EducationList from './EducationList'
/* eslint-enable */

function App() {

  return (

    <div>
      <Header/>
      <switch>
        <Route exact path='/education' component={EducationList}/>
      </switch>
    </div>

  );
}

export default App;
