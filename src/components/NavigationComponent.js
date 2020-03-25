import React from 'react';
import {
  BrowserRouter,
  NavLink,
} from 'react-router-dom';


const NavigationComponent = (props) => {
  return (
    <BrowserRouter>
       <nav className="main-nav">
          <ul>
            <li><NavLink to='/cats' onClick={() => props.clickevent('cats')}>Cats</NavLink></li>
            <li><NavLink to='/dogs' onClick={() => props.clickevent('dogs')}>Dogs</NavLink></li>
            <li><NavLink to='/lakes' onClick={() => props.clickevent('lakes')}>Lakes</NavLink></li>
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