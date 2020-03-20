// Photo.js
import React from 'react';
// import NotFound from './NotFound';


// Here use class

const Photo = props => {
    return (
        <li>
            <img src={props.photo} alt="" />
        </li>

    );
}

export default Photo;