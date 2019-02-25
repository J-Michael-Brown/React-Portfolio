import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {Button} from 'react-toolbox/lib/button';
import { Link } from 'react-router-dom';

function Header(){
  return (

    <AppBar title="React Toolbox" leftIcon='' rightIcon=''>
      <Navigation type="horizontal">
        <Link to="/education"><Button label='Education' accent /></Link>
        <Link to="/projects"><Button label='Projects' accent raised /></Link>
        <Link to="/interests"><Button label='Interests' accent /></Link>
      </Navigation>
    </AppBar>
  );
}

export default Header;
