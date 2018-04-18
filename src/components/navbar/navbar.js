import React, { Component } from 'react';
import './Navbar.css';

const Navbar = props => {
  
    return (
      <nav className="nav">
        <div className="container">
          <div className="row">
            <div className="right-align score">
             Score: {props.score} Top Score: {props.topScore}
            </div>
          </div> 
        </div>
      </nav>
    );
  
}



export default Navbar;
