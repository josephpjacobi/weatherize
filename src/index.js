import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const weatherData = {
  Boston: 
    {
      weather: 'sunny',
      chanceOfRain: 50,
      wind: 'no'
    },
  'New York': 
    {
      weather: 'cloudy',
      chanceOfRain: 90,
      wind: 'yes'
    }
}

const getWeatherReport = location => {
  let myWeather = weatherData.location;
  return myWeather;
}

const weather = (
  <div>
    <h1>Today's Weather in <strong>New York</strong> is:</h1>
    <h2>Weather type: Sunny </h2>
    <h2>Chance of rain: 50%</h2>
    <h2>Wind: Yes</h2>
  </div>
)


ReactDOM.render(weather, document.getElementById('root'));
