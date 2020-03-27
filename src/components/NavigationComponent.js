import React from 'react';
import {
  BrowserRouter,
  NavLink,
} from 'react-router-dom';


const NavigationComponent = () => {
  return (
    <BrowserRouter>
       <nav className="main-nav">
          <ul>
            <li><NavLink exact to='/cats' >Cats</NavLink></li>
            <li><NavLink exact to='/dogs' >Dogs</NavLink></li>
            <li><NavLink exact to='/lakes' >Lakes</NavLink></li>
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