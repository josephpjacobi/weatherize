import React from 'react';
import { locationData } from './components/weather/location-data';


export class displayLatLong extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <h1>The coordinates for SEARCH CITY are:</h1>
        <h2>Latitude: LATITUDE</h2>
        <h2>Longitude: LONGITUDE</h2>
      </div>
    )
  }
}