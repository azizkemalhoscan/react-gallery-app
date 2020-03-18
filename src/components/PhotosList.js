import React, { Component } from 'react';
import Photo from './Photo';

const PhotosList = props => {

    const results = props.data
    let photos = results.map(photo =>
        <Photo data={photo}/>
    );
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
            </ul>
        </div>
    );
}

export default PhotosList;