import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel.js';

import './App.css';

export class App extends React.Component {
  constructor() {
    super();
    this.places = ['olawale', 'kimjay', 'wale', 'jjj', 'ike', 'mariam', 'adewale', 'kunle', 'soji','ramadan'];
  }

  render() {
    return (
      <div className="App">
        <h1 style={{color:"#f90"}} >Gamers Selector</h1>
       
        <Wheel items={this.places} />
        <h1 style={{color:"#f90"}} >Made by kimjay </h1>
      </div>
    );
  }
}

export default App
