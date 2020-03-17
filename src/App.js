import React from 'react';
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

const App = () => {
  return (
    <BrowserRouter>
       <div className="App">
          <h1>Aziz I am APP </h1>      
       </div>   
       <SearchForm />
       <Nav /> 
       <Photo />
    </BrowserRouter>
  );
}

export default App;
