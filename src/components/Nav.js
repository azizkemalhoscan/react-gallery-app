import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const Nav = () => {
  return (
    <BrowserRouter>
      <nav class="main-nav">
          <ul>
            <li><a href='#'>Cats</a></li>
            <li><a href='#'>Dogs</a></li>
            <li><a href='#'>Computers</a></li>
            <li><a href='#'>Test</a></li>
          </ul>
      </nav>
    </BrowserRouter>
  );
}

export default Nav;
