import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import PhotosList from './PhotosList';

const NavigationComponent = () => {
  return (
    <BrowserRouter>
       <nav className="main-nav">
          <ul>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/Monkeys'>Monkeys</NavLink></li>
          </ul>
      </nav>    
    </BrowserRouter>
  );
}

export default NavigationComponent;


/* 
THIS IS GENERAL GUIDE REGARDING MOCKUPS.
      <nav class="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>
*/