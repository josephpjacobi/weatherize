import React, { Component } from 'react';
import './App.css';
import { DisplayWeather } from './components/weather/display-weather';
import { LandingPage } from './components/landing-page/landing-page';
import { DisplayLatLong } from './components/display-lat-long/display-lat-long';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <LandingPage />
        <DisplayWeather location='Boston'/>
        <DisplayLatLong />
      </div>
    );
  }
}

export default App;
