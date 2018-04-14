import React, { Component } from 'react';
import logo from '../../logo.svg';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
          Bootstrap
        </a>
      </nav>
    );
  }
}



export default Navbar;
