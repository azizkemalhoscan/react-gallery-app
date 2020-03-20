import React, { Component } from 'react';
// import ApiKey from '/sr/components/config.js';

const contextGallery = React.createContext();
// const fetchApi = <ApiKey />;

export class Provider extends Component {
    state = {
        cards: []
    }
    // fa4a57776ea659f17683daa008a99003
    componentDidMount() {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fa4a57776ea659f17683daa008a99003&tags=sunsets&per_page=24&format=json&nojsoncallback=1/services/rest/?method=flickr.photos.search&api_key=fa4a57776ea659f17683daa008a99003&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
          .then( response => response.json())
          .then( responseData => {
            this.setState({
              cards: responseData.photos
            });
          })
          .catch(error => {
            console.log('error fetching', error);
          });
      }

    render()  {
        return(
            <contextGallery.Provider value={{
                images: this.state.cards }} >
                {this.props.children}
              <div className="App">
                  <h1>Aziz I am APP </h1>    
              </div>   
          </contextGallery.Provider>           
        );
    }
}


export const Consumer = contextGallery.Consumer;

/* 
THIS IS GENERAL GUIDE REGARDING MOCKUPS.

*/