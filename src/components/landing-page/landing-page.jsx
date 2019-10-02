import React from 'react';


export class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Get the Weather Report For:</h1>
        <form action="" method="get">Your Location</form>
        <button type='submit'>Get the Weather!</button>
      </div>
    )
  }
}