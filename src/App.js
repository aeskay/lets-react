import React, { Component } from "react";
import './App.css';
import NavBar from './components/NavBar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Default from './components/Default';
import Details from './components/Details';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/details" component={Details}></Route>
        <Route  component={Default}></Route>
        
      </Switch>
    </React.Fragment>
  );
}

export default App;
