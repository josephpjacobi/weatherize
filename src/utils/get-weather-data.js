//DarkSky API

export async function getWeatherData({lat,long}) {
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/cb4b3867b0ca80c585151c9abbe12232/${lat},${long}?exclude=minutely,flags,hourly,daily,alerts`
  const response = await fetch(url);
  const weatherObject = await response.json();
  console.log(JSON.stringify(weatherObject))
}