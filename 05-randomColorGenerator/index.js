const startStop = document.querySelector('#start-stop');
const hexCode = '0123456789abcdef';

// adding click event to start/stop button
startStop.addEventListener('click', (e) => {
  let btn = e.target;

  // dynamically changing inner text of a button
  if (btn.innerText === 'Start') {
    btn.innerText = 'Stop';
  } else {
    btn.innerText = 'Start';
  }
  // calling function
  startStopGenerating();
})

// returns random color
function randomColor() {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    const randoNum = Math.floor(Math.random() * hexCode.length)
    hexColor += hexCode[randoNum]
  }
  return hexColor
}

// global variable to store interval reference
let intervalId = null;

// applies background color to main element every 500ms
function startStopGenerating() {

  // checks for interval id and clears it if exists
  if (intervalId) {
    clearInterval(intervalId);
    console.log('cleared');
    intervalId = null;
  } else {
    intervalId = setInterval(() => {
      document.querySelector('main')
        .style.backgroundColor = randomColor();
    }, 500)
  }
}