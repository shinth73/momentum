const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const deleteBtn = document.querySelector(".js-deleteGreeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintingGreeting(currentUser) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${currentUser}`;
}

function saveUser(currentUser) {
  localStorage.setItem(USER_LS, currentUser);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentUser = input.value;
  paintingGreeting(currentUser);
  saveUser(currentUser);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintingGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
