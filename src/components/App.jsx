/* eslint-disable */
import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import EducationList from './EducationList';
import ProjectList from './ProjectList';
import InterestListList from './InterestListList';
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
          <Route exact path='/interests' render={()=><InterestListList interestListList={this.state.portfolio.interestListList}/>}/>
        </switch>
      </div>

    );
  }
}

export default App;
