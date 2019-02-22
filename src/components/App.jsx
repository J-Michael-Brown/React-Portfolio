/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import EducationList from './EducationList';
import ProjectList from './ProjectList';
import InterestList from './InterestList';
import Portfolio from '../assets/portfolio.js';
/* eslint-enable */

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {portfolio: Portfolio};
  }

  render(){
    return (

      <div>
        <Header/>
        <switch>
          <Route exact path='/education' render={()=><EducationList educationList={this.state.portfolio.educationList}/>}/>
          <Route exact path='/projects' render={()=><ProjectList projectList={this.state.portfolio.projectList}/>}/>
          <Route exact path='/interests' render={()=><InterestList
              technicalInterestList={this.state.portfolio.technicalInterestList}
              personalInterestList={this.state.portfolio.personalInterestList}/>}/>
        </switch>
      </div>

    );
  }

}

export default App;
