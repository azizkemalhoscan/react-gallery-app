import React from 'react';
import {
  Link,
  NavLink,
  Route
} from 'react-router-dom';

const Nav = () => {
  return (
      <nav className="main-nav">
          <ul>
            <li><NavLink exact to='/'>Cats</NavLink></li>
            <li><NavLink to='/'>Dogs</NavLink></li>
            <li><NavLink to='/'>Computers</NavLink></li>
            <li><NavLink to='/'>Test</NavLink></li>
          </ul>
      </nav>
  );
}

export default Nav;
