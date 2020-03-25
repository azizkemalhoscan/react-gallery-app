import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotosList = (props) => {
  const results = props.data
  let items = results.map(item => 
    <Photo 
      farmnumber={item.farm}
      id={item.id}
      secretas={item.secret}
    />
    );
  return(
          <ul>
            {items}
          </ul>
  );
}

export default PhotosList;

/* 
THIS IS GENERAL GUIDE REGARDING MOCKUPS.
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
          </li>
          <!-- Not Found -->
          <li class="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>
*/