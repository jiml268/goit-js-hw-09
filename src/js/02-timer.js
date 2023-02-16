import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const startButton = document.querySelector('button[data-start]');
const dateInput = document.querySelector('#datetime-picker');
const displayTimer = document.querySelector('.timer');
const daysRemain = document.querySelector('[data-days]');
const hrRemain = document.querySelector('[data-hours]');
const minRemain = document.querySelector('[data-minutes]');
const secRemain = document.querySelector('[data-seconds]');
const Displaysetup = document.querySelectorAll('.field');

startButton.addEventListener('click', startCountDown);
let dateTimePicked = null
let ms = 0
let timerId = null;
startButton.disabled = true;
SetupScreen()

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      dateTimePicked = selectedDates[0]
      checkDate()
    },
  };
  const fp = flatpickr('#datetime-picker', options);


function SetupScreen(){  
  displayTimer.style.display = 'flex';
  displayTimer.style.marginTop = '15px';
  Displaysetup[0].style.marginleft = "15px" ;
  for (let i = 0; i < Displaysetup.length; i++ ){
  Displaysetup[i].style.marginRight = "15px" ;
  Displaysetup[i].style.padding = "10px" ;
  Displaysetup[i].style.border  = "thick solid black";
  Displaysetup[i].style.display = 'flex';
  Displaysetup[i].style.flexDirection = 'column';
  Displaysetup[i].style.alignItems = 'center';
  }
}


  function checkDate(){
    if (dateTimePicked < new Date()){

      Notiflix.Notify.warning('Please choose a date in the future');
        return
    }
    startButton.disabled = false;
  }

function startCountDown(event){
  event.preventDefault();
  startButton.disabled = true
  dateInput.disabled = true
  timerId =  setInterval(calcDifference,1000);
}



function calcDifference(){
  ms = dateTimePicked - new Date();
  if (ms < 0)
  {
    clearInterval(timerId);
    Notiflix.Notify.info('We have reached your chosen Day & Time');

    dateInput.disabled = false
    ms = 0

  }
  const convertTime = convertMs(ms)
  addLeadingZero(convertTime)
}


function addLeadingZero(value){
  daysRemain.innerHTML = value.days.toString().padStart(2, '0')
  hrRemain.innerHTML = value.hours.toString().padStart(2, '0')
  minRemain.innerHTML = value.minutes.toString().padStart(2, '0')
  secRemain.innerHTML = value.seconds.toString().padStart(2, '0')
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