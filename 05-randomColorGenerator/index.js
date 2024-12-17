const startStop = document.querySelector('#start-stop');

// adding click event to start/stop button
startStop.addEventListener('click', (e) => {
  let btn = e.target;

  // dynamically changing inner text of a button
  if (btn.textContent === 'Start') {
    btn.textContent = 'Stop';
    startGenerating()
  } else {
    btn.textContent = 'Start';
    stopGenerating()
  }
})

// function returns random color
function randomColor() {
  const hexStr = '0123456789ABCDEF';
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    const randoNum = Math.floor(Math.random() * hexStr.length)
    hexColor += hexStr[randoNum]
  }
  return hexColor
}


// global variable to store interval reference
let intervalId = null;

// applies background color to main element every 500ms
function startGenerating() {
  const main = document.querySelector('main');
  if (intervalId) return;

  intervalId = setInterval(() => {
    main.style.backgroundColor = randomColor();
  }, 500)
}

function stopGenerating() {
  clearInterval(intervalId);
  intervalId = null;
}