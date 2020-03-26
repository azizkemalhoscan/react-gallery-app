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
      tag: "",
      isLoading: true
    }
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = ( query = 'cats' ) => {

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

  render(){

    return(
      <BrowserRouter>
      <div className="container">
      <SearchForm  onSearch={this.performSearch}/>
        <NavigationComponent clickevent={this.performSearch}/>
          <Switch>
            <Route exact path="/" render={ () => <Redirect to='/cats' data={this.state.cards} />} />   
            <Route path="/cats" render={ () => <PhotosList  data={this.state.cards} title={this.state.titles} />} />
            <Route path="/dogs" render={ () => <PhotosList  data={this.state.cards} title={this.state.titles}  />} />
            <Route path="/lakes" render={ () => <PhotosList data={this.state.cards} title={this.state.titles}  />} /> 
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