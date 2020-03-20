import React, { Component } from 'react';
import { Provider, Consumer } from './components/Context/index.js';
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


// App components go here!


const App = () => {
    return (
            <BrowserRouter>
            <div className="App">
            <SearchForm />
            <NavigationComponent />
            <Switch>
              <Route exact path="/" render={ () => <Redirect to='/cats' />} />   
              <Route path="/cats" render={ () => <PhotosList tag='cats' />} />
              <Route path="/dogs" render={ () => <PhotosList tag='dogs' />} />
              <Route path="/monkeys" render={ () => <PhotosList tag='monkeys' />} /> 
              <Route component={NotFound} />            
            </Switch>       
            <PhotosList />
                <h1>Aziz I am APP </h1>    
            </div>  
        </BrowserRouter>   
          );
}

export default App;



/* 
THIS IS GENERAL GUIDE REGARDING MOCKUPS.
This is the main app 
You should include all components here in the relevant order.
*/