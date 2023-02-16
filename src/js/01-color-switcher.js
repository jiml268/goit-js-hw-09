const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
startButton.addEventListener('click', changeBackground);
stopButton.addEventListener('click', stopChange);
let timerId = null;
initializeButton();



function initializeButton(){
    startButton.disabled = false;
    stopButton.disabled = true;
}


function changeBackground(event){
    event.preventDefault();
    startButton.disabled = true;
    stopButton.disabled = false;
    timerId =  setInterval(changeColor,1000);
}
    
    
   function changeColor() {
    const newColor =  getRandomHexColor()
    document.body.style.backgroundColor = newColor;

}

function stopChange(event){
    event.preventDefault();
    clearInterval(timerId);
    initializeButton();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }