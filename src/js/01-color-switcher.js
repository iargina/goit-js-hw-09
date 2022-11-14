function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const start = document.querySelector(`button[data-start]`)
console.log(start);