import React, { Component } from 'react';
import './App';
import Header from './Header';
import Data from './Data';
import Sidebar from './Sidebar';
import './DashBoard.css';

class DashBoard extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>

        <div className="dataContainer">
          <Data />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}
export default DashBoard;
