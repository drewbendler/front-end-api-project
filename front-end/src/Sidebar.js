import React, { Component } from 'react';
import './App';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2>Emissions</h2>
        <h2>Climate</h2>
        <h2>Glacier</h2>
      </div>
    );
  }
}

export default Sidebar;
