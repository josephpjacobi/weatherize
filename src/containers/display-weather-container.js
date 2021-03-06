import React from 'react';
import { weatherData } from './data';


export class DisplayWeather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: {
        'city': 'Anchorage',
        "latitude": 64.2008,
        "longitude": -149.4937,
        "timezone": "America/Anchorage",
        "currently": {
          "time": 1569514461,
          "summary": "Overcast",
          "icon": "cloudy",
          "nearestStormDistance": 4,
          "nearestStormBearing": 263,
          "precipIntensity": 0,
          "precipProbability": 0,
          "temperature": 34.23,
          "apparentTemperature": 30.86,
          "dewPoint": 34.23,
          "humidity": 1,
          "pressure": 1025.38,
          "windSpeed": 3.81,
          "windGust": 3.81,
          "windBearing": 260,
          "cloudCover": 1,
          "uvIndex": 0,
          "visibility": 10,
          "ozone": 334
        },
        "offset": -8
      },
      searchCity: 'Anchorage'
    }

    this.setSearchCity = this.setSearchCity.bind(this);
  }

  getWeather() {
    const city = this.state.searchCity;
    const newWeather = weatherData[city] || {
      currently: {
        summary: `Not found for ${city}`,
        precipProbability: `Not found for ${city}`,
        windSpeed: `Not found for ${city}`,
        city
      }
    };

    this.setState({ weather: newWeather });
  }

  setSearchCity(event) {
    this.setState({ searchCity: event.target.value })
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.getWeather() }}>
          Get Weather!
        </button>
        <input type="text" value={this.state.searchCity} onChange={this.setSearchCity} />
        <div>
          <h1>Today's Weather in <strong>{this.state.weather.city}</strong> is:</h1>
          <h2>Weather type: {this.state.weather.currently.summary} </h2>
          <h2>Chance of rain: {this.state.weather.currently.precipProbability}</h2>
          <h2>Wind: {this.state.weather.currently.windSpeed}</h2>
        </div>
      </div>
    )
  }
}
