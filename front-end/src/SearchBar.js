import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App';
import './Header.css';
import './DashBoard.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: ''
    };
    this.toSearch = this.toSearch.bind(this);
  }
  toSearch = e => {
    this.setState({
      [this.state.year]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="Search Year"
          className="searchbar"
          value={this.state.year}
          onSubmit={this.toSearch}
        ></input>
      </form>
    );
  }
}

export default SearchBar;
