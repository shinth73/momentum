const weather = document.querySelector("js-weather");
const API_KEY = "d98546f4e44d14f0f49d77370059a45c";
const COORDS = "coords";

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
}

function handleGeoError() {}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedcoord = localStorage.getItem(COOORDS);
  if (loadCoords === null) {
    askForCoords();
  } else {
  }
}
function int() {
  console.log("sfas");
  loadCoords();
}

init();
