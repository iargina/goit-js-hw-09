function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector(`button[data-start]`);
const stop = document.querySelector(`button[data-stop]`);

start.addEventListener(`click`, changeCollor);

function changeCollor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  const colorChange = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
  start.setAttribute('disabled', 'disabled');
}

stop.addEventListener(`click`, standartStyle);

function standartStyle() {
  document.body.removeAttribute(`style`);
  start.removeAttribute('disabled');
  clearInterval(colorChange);
}

console.log(document.body);
