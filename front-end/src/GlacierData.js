import React, { Component } from 'react';
import './App';
import './DashBoard.css';

const glacierUrl = 'http://localhost:4000/glacier';

class GlacierData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.state.data) {
      fetch(glacierUrl)
        .then(glacierRes => glacierRes.json())
        .then(glacierRes => {
          this.setState({
            data: glacierRes
          });
          console.log(glacierRes);
        });
    }
  }
  render() {
    if (this.state.data) {
      let dataset = this.state.data.map(item => {
        return (
          <div className="glacierData-grid">
            <div className="meanmass">{item.MeanMass + '%'}</div>
            <div className="observations">{item.Observations}</div>
            <div className="year">{item.Year}</div>
          </div>
        );
      });
      return (
        <div className="dContainer">
          <div className="glacierLabels">
            <h2>Mean Mass</h2>
            <h2>Observations</h2>
            <h2>Year</h2>
          </div>
          <div className="dataset">{dataset}</div>
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
export default GlacierData;
