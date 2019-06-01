import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from './Home';
import NavBar from './NavBar';
import Contact from './Contact';
import Photos from './Photos';

export default function Routing () {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/photos" component={Photos} />
        </header>
      </div>
    </Router>
  )
}
