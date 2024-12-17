// DOM elements
const startStop = document.querySelector('#start-stop');
const main = document.querySelector('main');

// global variable
let intervalId = null;

// add click event to start/stop button
startStop.addEventListener('click', () => {

  // dynamically changes button text & function call
  if (startStop.textContent === 'Start') {
    startStop.textContent = 'Stop';
    startColorChange()
  } else {
    startStop.textContent = 'Start';
    stopColorChange()
  }
})


// returns random color
function randomColor() {
  const hexStr = '0123456789ABCDEF';
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    const randoNum = Math.floor(Math.random() * hexStr.length)
    hexColor += hexStr[randoNum]
  }
  return hexColor
}


// repeats changeBgColor every 300ms
function startColorChange() {
  if (intervalId) return;
  intervalId = setInterval(changeBgColor, 300)
}


// changes main's background color
function changeBgColor() {
  main.style.backgroundColor = randomColor();
}


// stops interval and intervalId back to null
function stopColorChange() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}