import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>About Us</h1>
      <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
    </div>
  );
}

export default Header;
