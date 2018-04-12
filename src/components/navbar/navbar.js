import React, { Component } from 'react';
import logo from '../../logo.svg';
import './navbar.css';

class App extends Component {
  render() {
    return (
      <div className="nav">
        <header className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <h1 className="nav-title">Select a card</h1>
          <h2 className="nav-score" id="currentScore">0</h2>
          <h2 className ="nav-high-score" id="highScore">1</h2>
        </header>
      </div>
    );
  }
}

export default App;
