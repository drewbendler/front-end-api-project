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

        <div className="legend">
          <h4>Legend</h4>
          <p>Emission data is per metric ton</p>
          <p>
            Climate and Emission data is a percentage increase relative to 1980
          </p>
          <p>* GCAG: Climate at a Glance</p>
          <p>* GISTEMP: Surface Temperature</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
