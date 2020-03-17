import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Photo from './components/Photo';
import SearchForm from './components/SearchForm';
import apiKey from './components/config.js';

// import NotFound from 'Notfound'; Not sure if this should be in Photos or not

// App components go here!

const fetchApi = <apiKey />;

class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: []
    }
  }
  componentDidMount() {
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fa4a57776ea659f17683daa008a99003&tags=sunsets&per_page=24&format=json&nojsoncallback=1/services/rest/?method=flickr.photos.search&api_key=fa4a57776ea659f17683daa008a99003&tags=sunsets&per_page=24&format=json&nojsoncallback=1')
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

  render(){
    console.log(this.state.cards)
    return (
      <BrowserRouter>
        <div className="App">
            <h1>Aziz I am APP </h1>    
            <Route path='/' component={SearchForm} />  
            <Route path='/' component={Nav} />
        </div>   
        {/* <Photo /> */}
      </BrowserRouter>
    );
  }
}

export default App;
