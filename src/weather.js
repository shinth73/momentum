/** @format */

const weather = document.querySelector(".js-weather");
const API_KEY = "d98546f4e44d14f0f49d77370059a45c";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${Math.floor(temperature)}°C @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordObj = {
    latitude,
    longitude,
  };
  saveCoords(coordObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log;
}

function askForCoords() {
  console.log("askForCoords");
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  // ation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedcoord = localStorage.getItem(COORDS);
  if (loadedcoord === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedcoord);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}
function init() {
  console.log("int");
  loadCoords();
}

init();
