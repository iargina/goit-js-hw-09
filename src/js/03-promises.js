const form = document.querySelector(`.form`);
const inputAmount = document.querySelector(`[name="amount"]`);
const inputStep = document.querySelector(`[name="step"]`);
const inputDelay = document.querySelector(`[name="delay"]`);

form.addEventListener(`submit`, creation);

function creation(event) {
  event.preventDefault()
  const amount = Number(inputAmount.value);
  const delayFirst = Number(inputDelay.value);
  const step = Number(inputStep.value);

  for (let i = 1; i <= amount; i++) {
    let position = i;
    let delay = delayFirst + step * i;
    createPromise(position, delay).then(success => console.log(success))
    .catch(error => console.log(error));
}
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject)=> {
  setTimeout(()=> {
     if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }},
  delay);
})
return promise
}
