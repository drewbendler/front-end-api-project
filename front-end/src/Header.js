import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App';
import './Header.css';
import DashBoard from './DashBoard';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h2>Do Something APi</h2>
        </Link>
      </div>
    );
  }
}

export default Header;
