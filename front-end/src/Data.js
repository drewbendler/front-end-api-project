import React, { Component } from 'react';
import './App';
import './Data.css';

const emissionsUrl = 'http://localhost:4000/emissions/';
const climateUrl = 'localhost:4000/climate';
const glacierUrl = 'localhost:4000/glacier';

class Data extends Component {
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
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res
          });
          console.log(res);
        });
    }
  }
  render() {
    if (this.state.data) {
      let dataset = this.state.data.map(item => {
        if (item.Year === 2014) {
          return (
            <div className="eachReturn">
              {item.Country}, {'total emissions: ' + item.Total}, {item.Year}
            </div>
          );
        }
      });
      return <div className="dataContainer">{dataset}</div>;
    } else {
      return (
        <div>
          <p>loading...</p>
        </div>
      );
    }
  }
}
export default Data;
