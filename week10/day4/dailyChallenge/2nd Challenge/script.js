// Instructions

// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

// https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400

const form = document.forms[0];
const latInputOne = form.elements.first__lat;
const lonInputOne = form.elements.first__lon;
const latInputTwo = form.elements.second__lat;
const lonInputTwo = form.elements.second__lon;

form.addEventListener("submit", sunriseHours);

const sunriseFetch = async function (lat, lon) {
  const sunriseAPI = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}lng=${lon}`
  );
  console.log(await sunriseAPI.json());
};

function sunriseHours(e) {
  e.preventDefault();
  Promise.all([
    sunriseFetch(latInputOne.value, lonInputOne.value),
    sunriseFetch(latInputTwo.value, lonInputTwo.value),
  ]);
}
