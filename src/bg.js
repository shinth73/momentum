const body = document.querySelector("body");

const IMG_NUNBER = 4;

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUNBER);
  return number;
}

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `img/${imageNumber + 1}.jpg`;

  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
