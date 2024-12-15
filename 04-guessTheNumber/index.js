let randoNum = Math.floor(Math.random() * 100 + 1);

// Form, Inputs and Submit
const form = document.querySelector('#form');
const userInput = document.querySelector('#user-input');
const submitBtn = document.querySelector('#sub');

// Start and End game buttons
const startBtn = document.querySelector('#start');
const endBtn = document.querySelector('#end');

// display Paras
const guesses = document.querySelector('#guesses');
const showChances = document.querySelector('#chances');
const lowHigh = document.querySelector('#lowHigh');

const display = document.querySelector('.display');


let prevGuess = [];
let attempts = 10;
let msg = '';

console.log(randoNum);

updateBoard('Start Guessing');
userInput.focus();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const guess = parseInt(userInput.value);

  if (isValid(guess)) {
    checkGuess(guess);
  } else {
    customLog(msg);
  }
})

endBtn.addEventListener('click', endGame)
startBtn.addEventListener('click', startGame)

function isValid(guess) {
  if (isNaN(guess)) {
    msg = 'Not a valid number';
    return false;
  }
  if (guess < 1 || guess > 100) {
    msg = 'Not in range of 1 - 100';
    return false;
  }
  return true;
}

function checkGuess(guess) {

  console.log(`Attempts Left: ${attempts}|Guess: ${guess}`)

  attempts--;
  prevGuess.push(guess);
  form.reset();

  if (guess > randoNum) {
    updateBoard('High');
  } else if (guess < randoNum) {
    updateBoard('Low');
  } else if (guess === randoNum) {
    updateBoard(`You Won. Number is ${randoNum}`);
    lowHigh.style.backgroundColor = 'Green'
    endGame();
  }

  if (attempts === 0) {
    display.children[1].style.backgroundColor = 'red';
    display.children[2].style.color = 'red';
    display.children[2].style.fontSize = '1.5em';
    lowHigh.innerHTML = 'Game Over';
    endGame();
    console.log('No attempts left');
  }
}

function updateBoard(lowHighMsg) {
  showChances.innerHTML = attempts;
  lowHigh.innerHTML = lowHighMsg;
  guesses.innerHTML = prevGuess.join(',') || 'None';
}

function customLog() {
  console.log(msg);
}

function endGame() {
  userInput.setAttribute('disabled', 'true');

  // remove submit button access and styling
  submitBtn.classList.remove('hover');
  submitBtn.style.cursor = 'default';
  submitBtn.setAttribute('disabled', 'true');

  // remove end game button access and styling
  endBtn.classList.remove('hover');
  endBtn.style.cursor = 'default';
  endBtn.setAttribute('disabled', 'true')
}

function startGame() {

  randoNum = Math.floor(Math.random() * 100 + 1);
  console.log(randoNum);

  prevGuess = [];
  attempts = 10;
  msg = '';

  updateBoard('Start Guessing');

  display.children[2].style.fontSize = '';
  display.children[2].style.color = '';
  display.children[1].style.backgroundColor = '';
  lowHigh.style.backgroundColor = '';
  userInput.focus();
  userInput.removeAttribute('disabled');

  // restore submit button
  submitBtn.classList.add('hover');
  submitBtn.style.cursor = 'pointer';
  submitBtn.removeAttribute('disabled');

  // restore end game button
  endBtn.classList.add('hover');
  endBtn.style.cursor = 'pointer';
  endBtn.removeAttribute('disabled');
}