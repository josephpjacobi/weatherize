import React, { Component } from 'react';
import './App.css';
import { DisplayWeather } from './components/weather/display-weather';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <DisplayWeather location='X'/>
      </div>
    );
  }
}

export default App;
