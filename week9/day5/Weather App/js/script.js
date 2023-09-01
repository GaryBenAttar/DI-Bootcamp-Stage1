const form = document.forms[0];
const cityInput = form.elements.city__search;

form.addEventListener("submit", cityWeather);

let deleteElements = [];
const weatherBoxes = document.querySelector(".weather__boxes");

cityInput.addEventListener("keyup", (e) => {
  if ((e.keys = "delete")) cityInput.classList.remove("invalid");
});
// On submit:

function cityWeather(e) {
  e.preventDefault();
  let cityLat;
  let cityLon;
  getCoordinates(cityInput.value);
  cityInput.value = "";
}

// Get city coordinates:

const getCoordinates = function (city) {
  let geocoderAPI = new XMLHttpRequest();

  geocoderAPI.open(
    "GET",
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`
  );
  geocoderAPI.responseType = "json";
  geocoderAPI.send();

  geocoderAPI.onload = function () {
    if (geocoderAPI.status !== 200) {
      console.log(
        `Geocoder Error ${geocoderAPI.status}: ${geocoderAPI.statusText}`
      );
    } else {
      if (geocoderAPI.response[0] === undefined) {
        cityInput.value = "Invalid city!";
        cityInput.classList.add("invalid");
      } else {
        cityLat = geocoderAPI.response[0].lat;
        cityLon = geocoderAPI.response[0].lon;

        cityObj = geocoderAPI.response;
        weatherObj = getWeather(cityLat, cityLon);
      }
    }
  };
};

//   Getting City Weather:

const getWeather = function (lat, lon) {
  let openWeatherAPI = new XMLHttpRequest();

  openWeatherAPI.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`
  );

  openWeatherAPI.responseType = "json";

  openWeatherAPI.send();

  openWeatherAPI.onload = function () {
    if (openWeatherAPI.status !== 200) {
      console.log(
        `Open Weather Error ${openWeatherAPI.status}: ${openWeatherAPI.statusText}`
      );
    } else {
      console.log(openWeatherAPI.response);
      appendWeatherCard(cityObj, openWeatherAPI.response);
    }
  };
};

// Create and append Weather Box

const appendWeatherCard = function (city, weather) {
  const div = document.createElement("div");
  div.setAttribute("class", "box");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "header__secondary");
  h2.textContent = city[0].name;

  const country = document.createElement("span");
  country.setAttribute("class", "country");
  country.textContent = city[0].country;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete");
  deleteBtn.textContent = "X";

  const temp = document.createElement("p");
  temp.setAttribute("class", "temp");
  temp.textContent = `${Math.trunc(weather.main.temp - 272.15)}°C`;

  const weatherLogo = document.createElement("img");
  weatherLogo.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  );
  weatherLogo.setAttribute("alt", `${weather.weather.main}`);
  weatherLogo.setAttribute("class", "weather__logo");

  const description = document.createElement("p");
  description.setAttribute("class", "description");
  description.textContent = `${weather.weather[0].description.toUpperCase()}`;

  div.appendChild(h2);
  h2.appendChild(country);
  div.appendChild(deleteBtn);
  div.appendChild(temp);
  div.appendChild(weatherLogo);
  div.appendChild(description);

  weatherBoxes.appendChild(div);

  // Delete feature:

  deleteElements.push(deleteBtn);

  deleteElements.forEach((v) => {
    v.addEventListener("click", () => {
      v.parentNode.remove();
    });
  });
};
