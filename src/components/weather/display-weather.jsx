import React from 'react';
import { getLatLong } from '../../utils/get-lat-long';
import { getWeatherData } from '../../utils/get-weather-data';



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
      searchCity: props.location
    }

    this.setSearchCity = this.setSearchCity.bind(this);
  }

//To add more data log weather to get the key value names for desired data point and adjust currently object
  async getWeather() {
    const search = this.state.searchCity;
    const latLong = await getLatLong(search);
    
    const weather = await getWeatherData(latLong.coordinates, latLong.place_id);
    const newWeather =  { 
      city: latLong.location,
      currently: {
        summary: weather.currently.summary,
        precipProbability: weather.currently.precipProbability,
        windSpeed: weather.currently.windSpeed
        }
    }; 
    this.setState({weather: newWeather});
  }

  setSearchCity(event) {
    this.setState({searchCity: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.searchCity} onChange={this.setSearchCity} />
        <button onClick={() => {this.getWeather()}}>
          Get Weather!
        </button> 
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


