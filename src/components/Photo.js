// Photo.js
import React from 'react';


// Mockup for each photo to be rendered

const Photo = props => {
    return (    
                <li>
                    <img src={`https://farm${props.farmnumber}.staticflickr.com/4334/${props.id}_${props.secretas}.jpg`} alt="" />
                </li>

    );
}

export default Photo;

/* 
THIS IS GENERAL GUIDE REGARDING MOCKUPS.
          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
*/