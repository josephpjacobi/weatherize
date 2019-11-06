//DarkSky API
const { DARK_SKY } = require('../../config');

export async function getWeatherData({lat, lng}, place_id) {
   // const local = 'http://localhost:3001/'
  // const localTest = await fetch(local).then((response) => {
  //   if (response.ok) {
  //     return response.json();
  //   } else {
  //     throw new Error('Something went wrong');
  //   }
  // });
  // console.log(localTest);
  
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARK_SKY}/${lat},${lng}?exclude=minutely,flags,hourly,daily,alerts`;
  
  const weather = await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
    .then((weatherObject) => {
      return weatherObject;
    })
    .catch((error) => {
      console.log(error)
    });

  return weather;
}