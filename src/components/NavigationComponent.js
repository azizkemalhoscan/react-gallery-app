import React from 'react';
import {
  NavLink
} from 'react-router-dom';

const NavigationComponent = (props) => {
  return (
       <nav className="main-nav">
          <ul>
            <li><NavLink to='/cats' >Cats</NavLink></li>
            <li><NavLink to='/dogs' >Dogs</NavLink></li>
            <li><NavLink to='/lakes' >Lakes</NavLink></li>
          </ul>
      </nav>    
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