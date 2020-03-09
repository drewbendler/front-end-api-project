import React, { Component } from 'react';
import './App';
import { Link, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
import './DashBoard.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link to="/emissions">
          <h3>Emissions</h3>
        </Link>

        <Link to="/climate">
          <h3>Climate</h3>
        </Link>

        <Link to="/glacier">
          <h3>Glacier</h3>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
