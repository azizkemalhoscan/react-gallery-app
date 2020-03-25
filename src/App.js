import React, { Component } from 'react';
import logo from './logo.svg';
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
import NotFound from './components/NotFound';
import Photo from './components/Photo';


// App components go here!


class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: [],
      tag: ""
    }
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = ( query = 'elephants') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fa4a57776ea659f17683daa008a99003&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( response => response.json())
    .then( responseData => {
      this.setState({
        cards: responseData.photos.photo
      });
    })
    .catch(error => {
      console.log('error fetching', error);
    });
  }

  render(){

    return(
      <BrowserRouter>
      <div className="App">
      <SearchForm  onSearch={this.performSearch}/>
      <NavigationComponent />
      <Switch>
        <Route exact path="/" render={ () => <Redirect to='/cats' data={this.state.cards} />} />   
        <Route path="/cats" render={ () => <PhotosList  data={this.state.cards} />} />
        <Route path="/dogs" render={ () => <PhotosList  data={this.state.cards}  />} />
        <Route path="/monkeys" render={ () => <PhotosList data={this.state.cards} />} /> 
        <Route component={NotFound} />             */
      </Switch>       
          <h1>Aziz I am APP </h1>    
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