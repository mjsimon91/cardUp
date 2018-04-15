import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              Card Up
            </div> 
            <div id="score">
             Score: {this.props.score} Top Score: {this.props.topScore}
            </div>
          </div> 
        </div>
      </nav>
    );
  }
}



export default Navbar;
