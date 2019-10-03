//Google API

export async function getLatLong() {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAlJFyBn5DLTB9ehxQn2J61pyvAZT5dk8o';

  const coordinates = await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
    .then((locationObject) => {
      const coordinates = locationObject.results[0].geometry.location;
      return coordinates;
    })
    .catch((error) => {
      console.log(error)
    });

  return coordinates;
} 


//Not sure why this works, need to read docs about async await and fetch



