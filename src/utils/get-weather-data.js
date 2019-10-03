//DarkSky API

export async function getWeatherData({lat, lng}) {
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/cb4b3867b0ca80c585151c9abbe12232/${lat},${lng}?exclude=minutely,flags,hourly,daily,alerts`;
  
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