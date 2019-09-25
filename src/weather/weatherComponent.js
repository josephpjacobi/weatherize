import React from 'react';
import ReactDOM from 'react-dom';
import {weatherData} from './data'


export class TodaysWeather extends React.Component {
  render() {
     
    return (
    <div>
      <h1>Today's Weather in <strong>New York</strong> is:</h1>
      <h2>Weather type: Sunny </h2>
      <h2>Chance of rain: 50%</h2>
      <h2>Wind: Yes</h2>
    </div>
    )
  }
}

// const getWeatherReport = location => {
//   let myWeather = weatherData.location;
//   return myWeather;
// }


