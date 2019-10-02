import React from 'react';
import { locationData } from '../weather/location-data';


export class DisplayLatLong extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     'latitude': 30
    }
  }
  render() {
    const latitude = locationData.results[0].geometry.location.lat
    const longitude = locationData.results[0].geometry.location.lng
    const city = locationData.results[0].address_components[2].long_name
    const cityState = locationData.results[0].address_components[4].short_name
    
    
    return (
      <div>
        <h1>The coordinates for {city}, {cityState} are:</h1>
        <h2>Latitude: {latitude}</h2>
        <h2>Longitude: {longitude}</h2>
      </div>
    )
  }
}