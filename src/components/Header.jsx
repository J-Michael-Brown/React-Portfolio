import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>J. Michael Brown</h1>
      <Link to="/education">Education</Link>
    </div>
  );
}

export default Header;
