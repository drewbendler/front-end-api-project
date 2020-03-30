import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h2>Global Emission vs Climate</h2>
        </Link>
      </div>
    );
  }
}

export default Header;
