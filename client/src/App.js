import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/index';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Card />
        <footer>
          This footer brought to you by: PNP Enterprises, LLC. Copyright 2020
        </footer>
      </div>
    )
  }
}

export default App;