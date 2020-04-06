import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// App components go here!
import './App.css';
import NavigationComponent from './components/NavigationComponent';
import SearchForm from './components/SearchForm';
import PhotosList from './components/PhotosList';

//  imported config files variable for a hidden apikey
import apiKey from './components/Config';

// App components go here!


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      cats: [],
      dogs: [],
      lakes: [],
      tag: "",
      isLoading: true,
      path: ''
    }
  }
  componentDidMount() {
      this.performSearchForCats();
      this.performSearchForDogs();
      this.performSearchForLakes();

  }
// this performSearch is going to be used for our searchForm
  performSearch = ( query ) => {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( response => response.json())
    .then( responseData => {
      this.setState({
        cards: responseData.photos.photo,
        tag: query,
        isLoading: false,
        titles: `${query} gallery`
      });
    })
    .catch(error => {
      console.log('error fetching', error);
    });
  }

  // gallery for ccats
  performSearchForCats = () => {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then( response => response.json())
    .then( responseData => {
      this.setState({
        cats: responseData.photos.photo,
        isLoading: false,
        titleCat: `cats gallery`
      });
    })
    .catch(error => {
      console.log('error fetching', error);
    });
  }
// gallery for dogs
  performSearchForDogs = () => {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then( response => response.json())
    .then( responseData => {
      this.setState({
        dogs: responseData.photos.photo,
        isLoading: false,
        titleDog: `dogs gallery`
      });
    })
    .catch(error => {
      console.log('error fetching', error);
    });
  }
// gallery for lakes
  performSearchForLakes = () => {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lakes&per_page=24&format=json&nojsoncallback=1`)
    .then( response => response.json())
    .then( responseData => {
      this.setState({
        lakes: responseData.photos.photo,
        isLoading: false,
        titleLake: `lakes gallery`
      });
    })
    .catch(error => {
      console.log('error fetching', error);
    });
  }

  render(){
    return(
      <BrowserRouter>
      <div className="container">
      <SearchForm  onSearch={this.performSearch} />
        <NavigationComponent />
           <Switch>
              <Route exact path="/" render={ () => <Redirect to='/cats'  />} />   
              <Route exact path="/cats" render={ () => <PhotosList  data={this.state.cats} title={this.state.titleCat} loading={this.state.isLoading} />} />
              <Route exact path="/dogs" render={ () => <PhotosList  data={this.state.dogs} title={this.state.titleDog} loading={this.state.isLoading} />} />
              <Route exact path="/lakes" render={ () => <PhotosList data={this.state.lakes} title={this.state.titleLake} loading={this.state.isLoading} />} />
              <Route path="/search" render={ () => (this.state.isLoading) ? 
        <p>Nothing</p> : <PhotosList data={this.state.cards} title={this.state.titles} loading={this.state.isLoading} />
      } />
           </Switch>
      </div>  
      </BrowserRouter>      
    );
  }
}


export default App;



/* 
THIS IS GENERAL GUIDE REGARDING MOCKUPS.
This is the main app 
You should include all components here in the relevant order.
*/