import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="row">
            <div className="right-align score">
             Score: {this.props.score} Top Score: {this.props.topScore}
            </div>
          </div> 
        </div>
      </nav>
    );
  }
}



export default Navbar;
