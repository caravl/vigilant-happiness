import React from 'react';
import { Link } from "react-router-dom";

function NavBar () {
  return (
    <div className="Nav-bar">
      <p>
        <Link style={{paddingLeft: 13, textDecoration: 'none', color: 'white'}} to="/">Home</Link>
      </p>
      <p>
        <Link style={{paddingLeft: 13, textDecoration: 'none', color: 'white'}} to="/contact">Contact</Link>
      </p>
      <p>
        <Link style={{paddingLeft: 13, textDecoration: 'none', color: 'white', paddingRight: 13}} to="/photos">Photos</Link>
      </p>
    </div>
  )
}

export default NavBar;
