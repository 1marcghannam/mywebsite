import React from 'react';
import './App.css';
import './Nav.css';
import Navigation from "./Navigation";
import Home from "./Home";
import Footer from "./Footer";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home2 from "./Home2";
import Contact from "./Contact";





function App() {
  return (
      <Router>
      <div className='test'>
          <Navigation/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Home2}/>
          <Route path="/contact" component={Contact}/>
          {/*<Home/>*/}
          </Switch>


          <Footer/>



      </div>
          </Router>





  );
}

export default App;
