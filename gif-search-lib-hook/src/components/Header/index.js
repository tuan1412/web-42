import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="Header
        d-flex
        flex-column
        align-items-center
        justify-content-center
        mt-4"
      >
        <img src={logo} alt="logo" />
        <h3>Let's search</h3>
      </div>
    )
  }
}

export default Header;
