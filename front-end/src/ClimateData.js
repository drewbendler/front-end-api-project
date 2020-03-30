import React, { Component } from 'react';
import './App';
import './DashBoard.css';
import SearchBar from './SearchBar';

const climateUrl = 'http://localhost:4000/climate';

class ClimateData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.state.data) {
      fetch(climateUrl)
        .then(climateRes => climateRes.json())
        .then(climateRes => {
          this.setState({
            data: climateRes
          });
          console.log(climateRes);
        });
    }
  }
  render() {
    if (this.state.data) {
      let dataset = this.state.data.map(item => {
        console.log(SearchBar.state);
        return (
          <div className="climateData-grid">
            <div className="mean">{item.Mean}</div>
            <div className="source">{item.Source}</div>
            <div className="year">{item.Year}</div>
          </div>
        );
      });
      return (
        <div>
          <div className="climateLabels">
            <h2>Mean</h2>
            <h2>Source</h2>
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
export default ClimateData;
