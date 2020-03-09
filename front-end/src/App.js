import React, { Component } from 'react';
import DashBoard from './DashBoard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.setId = this.setId.bind(this);
  }
  setId(id) {
    this.setState({ id: id });
  }
  render() {
    return (
      <div>
        <DashBoard />
      </div>
    );
  }
}

export default App;
