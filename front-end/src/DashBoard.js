import React, { Component } from 'react';
import './App';
import Header from './Header';
import EmissionData from './EmissionData';
import ClimateData from './ClimateData';
import GlacierData from './GlacierData';
import Sidebar from './Sidebar';
import './DashBoard.css';
import { Link, Route } from 'react-router-dom';

class DashBoard extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>

        <div className="dataContainer">
          <Route
            path="/emissions"
            render={routerProps => (
              <EmissionData
                setId={this.setId}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/climate"
            render={routerProps => (
              <ClimateData
                setId={this.setId}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/glacier"
            render={routerProps => (
              <GlacierData
                setId={this.setId}
                {...routerProps}
                {...this.state}
              />
            )}
          />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}
export default DashBoard;
