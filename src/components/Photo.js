// Photo.js
import React from 'react';
import { Consumer } from './Context';

// Here use class

const Photo = props => {

    return (    
        <Consumer>
        { context => {
            console.log(context.images.photo)
            return(
                <li>
                    <img src={props.photo} alt="" />
                </li>
            );
        }}
        </Consumer>  
    );
}

export default Photo;

/* 
THIS IS GENERAL GUIDE REGARDING MOCKUPS.
          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
*/