//Google API
const { GOOGLE_MAPS } = require('../../config');
//This function needs to take in a city and state as arguments from the form
//Those arguments need to be passed into the url variable with string interpolation 
//The address query param can be trimmed to only accept city and state while still returning the same results 
  //The API doesn't need all the address info, lat and long can still be accessed
export async function getLatLong(address) { 
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_MAPS}`;
  const coordinates = await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
    .then((locationObject) => {
      const address = {};
      address.coordinates = locationObject.results[0].geometry.location;
      address.location = locationObject.results[0].formatted_address || 'Address not found';
      address.place_id = locationObject.results[0].place_id || null;
      return address;
    })
    .catch((error) => {
      console.log(error)
    });

  return coordinates;
} 


//Not sure why this works, need to read docs about async await and fetch



