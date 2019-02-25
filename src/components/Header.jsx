import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {Button} from 'react-toolbox/lib/button';
import { Link } from 'react-router-dom';

class Header extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      currentRoute: ''
    };
    this.handleCurrentRoute = this.handleCurrentRoute.bind(this);
  }

  handleCurrentRoute(newRoute){
    this.setState({currentRoute: newRoute});
  }

  render(){
    let currentRoute = this.state.currentRoute;
    let eduLink = <Link to="/education"><Button onClick={() => this.handleCurrentRoute('education')} label='Education' accent /></Link>;
    let projectLink = <Link to="/projects"><Button onClick={() => this.handleCurrentRoute('projects')} label='Projects' accent /></Link>;
    let interestLink = <Link to="/interests"><Button onClick={() => this.handleCurrentRoute('interests')} label='Interests' accent /></Link>;

    if(currentRoute=='education'){
      eduLink = <Link to="/education"><Button onClick={() => this.handleCurrentRoute('education')} label='Education' accent raised/></Link>;
    }
    else if(currentRoute == 'projects'){
      projectLink = <Link to="/projects"><Button onClick={() => this.handleCurrentRoute('projects')} label='Projects' accent raised /></Link>;
    }
    else if(currentRoute == 'interests'){
      interestLink = <Link to="/interests"><Button onClick={() => this.handleCurrentRoute('interests')} label='Interests' accent raised /></Link>;
    }

    return (
      <AppBar title="J. Michael Brown">
        <Navigation type="horizontal">
          {eduLink}
          {projectLink}
          {interestLink}
        </Navigation>
      </AppBar>
    );
  }
}

export default Header;
