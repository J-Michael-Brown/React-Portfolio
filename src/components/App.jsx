/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import EducationList from './EducationList';
import ProjectList from './ProjectList';
import InterestList from './InterestList';
/* eslint-enable */

function App() {

  return (

    <div>
      <Header/>
      <switch>
        <Route exact path='/education' component={EducationList}/>
        <Route exact path='/projects' component={ProjectList}/>
        <Route exact path='/interests' component={InterestList}/>
      </switch>
    </div>

  );
}

export default App;
