const form = document.querySelector(`.form`);
const inputAmount = document.querySelector(`[name="amount"]`);
const inputStep = document.querySelector(`[name="step"]`);
const inputDelay = document.querySelector(`[name="delay"]`);

form.addEventListener(`submit`, creation);

function creation() {
  const amount = Number(inputAmount.value);
  const delayFirst = Number(inputDelay.value);
  const step = Number(inputStep.value);

  for (let i = 1; i <= amount; i++) {
    let position = i;
    let delay = delayFirst + step * i;
    createPromise(position, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
