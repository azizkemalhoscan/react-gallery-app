import React, { Component } from 'react';
import Photo from './Photo';

const PhotosList = props => {
    console.log(props.data.photo)
    let result = props.data;
    let gallery = [];
    // for(let i=0; i < 24; i++){
    //     gallery.push(
    //     <Photo 
    //         key={props.data.photo[i].id}
    //     />)
    // }
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
               
            </ul>
        </div>
    );
}

export default PhotosList;