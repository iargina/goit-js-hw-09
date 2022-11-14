import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-aio-3.2.5.min.js'

const start = document.querySelector(`button[data-start]`);
start.setAttribute(`disabled`, `disabled`);
const input = document.querySelector(`#datetime-picker`);
const days = document.querySelector(`span[data-days]`);
const hours = document.querySelector(`span[data-hours]`);
const minutes = document.querySelector(`span[data-minutes]`);
const seconds = document.querySelector(`span[data-seconds]`);
let timer;
let selectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDates[0] < new Date()) {
        Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }
    start.removeAttribute(`disabled`);
  },
};

flatpickr(input, options);

const addLeadingZero = value => value.toString().padStart(2, `0`);

start.addEventListener(`click`, setTimer);
function setTimer() {
  start.setAttribute(`disabled`, `disabled`);
  input.setAttribute(`disabled`, `disabled`);
  timer = setInterval(() => {
    const delta = selectedDate - Date.now();
    if (delta < 1000) {
      clearInterval(timer);
    }
    const time = convertMs(delta);
    days.textContent = addLeadingZero(time.days);
    hours.textContent = addLeadingZero(time.hours);
    minutes.textContent = addLeadingZero(time.minutes);
    seconds.textContent = addLeadingZero(time.seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
