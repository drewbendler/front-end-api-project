import React, { Component } from 'react';
import './App';
import './DashBoard.css';

const emissionsUrl = 'http://localhost:4000/emissions/';
const climateUrl = 'localhost:4000/climate';
const glacierUrl = 'localhost:4000/glacier';

class EmissionData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.state.data) {
      fetch('http://localhost:4000/emissions')
        .then(countryRes => countryRes.json())
        .then(countryRes => {
          this.setState({
            data: countryRes
          });
          console.log(countryRes);
        });
    }
  }
  render() {
    if (this.state.data) {
      let dataset = this.state.data.map(item => {
        if (item.Year === 2014) {
          return (
            <div className="data-grid">
              <div className="countryName">{item.Country}</div>
              <div className="countryTotalFuel">{item.Total}</div>
              <div className="countryGasFuel">{item.GasFuel}</div>
              <div className="countrySolidFuel">{item.SolidFuel}</div>
              <div className="countryLiquidFuel">{item.LiquidFuel}</div>
              {/* <div className="countryPerCapita">{item.PerCapita}</div> */}
              <div className="countryYear">{item.Year}</div>
            </div>
          );
        }
      });
      return (
        <div>
          <div className="emissionLabels">
            <h2>Country</h2>
            <h2>Total Fuel Emissions</h2>
            <h2>Gas Fuel</h2>
            <h2>Liquid Fuel</h2>
            <h2>Solid Fuel</h2>
            <h2>Year</h2>
          </div>
          <div className="dContainer">
            <div className="dataset">{dataset}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>loading...</p>
        </div>
      );
    }
  }
}
export default EmissionData;
