import React, { Component } from 'react';
import './App';
import Header from './Header';
import Data from './Data';
import Sidebar from './Sidebar';

class DashBoard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Data />
        <Sidebar />
      </div>
    );
  }
}
export default DashBoard;
