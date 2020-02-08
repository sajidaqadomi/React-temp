import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './style.css';



function Navbar() {
  return (
  <div className="Navbar">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className='container'>
  <Link className="navbar-brand" to="#">Ultra</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink   className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="/work">Work</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="/portofolio">Portofolio</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="/resume">Resume</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"to="/contact">Contact</NavLink>
      </li>

    </ul>
   
  </div>
  </div>
</nav>

        
    </div>
  );
}

export default Navbar;
