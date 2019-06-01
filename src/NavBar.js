import React from 'react';
import { Link } from "react-router-dom";

function NavBar () {
  return (
    <div className="nav-bar">
      <p className='link'>
        <Link className='nav-bar-link' to="/">About</Link>
      </p>
      <p className='link'>
        <Link className='nav-bar-link' to="/work">Work</Link>
      </p>
      <p className='link'>
        <Link className='nav-bar-link' to="/contact">Contact</Link>
      </p>
      <p className='link'>
        <Link className='nav-bar-link' to="/personal">Personal</Link>
      </p>
      {/* <p>
        <Link style={{paddingLeft: 13, textDecoration: 'none', color: 'rgb(246, 248, 140)', paddingRight: 13}} to="/photos">Photos</Link>
      </p> */}
    </div>
  )
}

export default NavBar;
