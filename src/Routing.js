import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from './About';
import NavBar from './NavBar';
import Work from './Work';
import Contact from './Contact';
import Carousel from './Carousel';

export default function Routing () {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route path="/personal" component={Carousel} />
        </header>
      </div>
    </Router>
  )
}
