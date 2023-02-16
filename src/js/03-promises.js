import Notiflix from 'notiflix';
const delayAmt = document.querySelector('[name="delay"]');
const stepAmt = document.querySelector('[name="step"]');
const numOfPromises = document.querySelector('[name="amount"]');
const enterForm = document.querySelector('.form');
const startCreate = document.querySelector('button[type="submit"]');
startCreate.addEventListener('click', startPromises);



function startPromises(event){
event.preventDefault();
if ((+delayAmt.value === 0) || (+stepAmt.value === 0) || (+numOfPromises.value === 0)){
  Notiflix.Notify.warning('Please enter a number in all 3 fields');
return;
}
let convertdalay = +delayAmt.value;
const convertstepAmt = +stepAmt.value;
const convertNum = +numOfPromises.value;
for (let i =1; i<= convertNum; i++){
createPromise(i, convertdalay)
convertdalay += convertstepAmt
}
}

function createPromise(position, delay) {
  let p = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve('Filfill')
    // Fulfill
  } else {
    reject('Reject')
  }
})
 p.then((message) => {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  }).catch((message) => {
    Notiflix.Notify.failure(`Rejected  promise ${position} in ${delay}ms`);
  })

 }

