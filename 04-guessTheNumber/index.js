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

let canPlay = false;
let prevGuess = [];
let attempt = 10;


console.log(randoNum);

guesses.innerHTML = 'None';
showChances.innerHTML = attempt;
lowHigh.innerHTML = 'Start Guessing'


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const guess = parseInt(userInput.value)
  if (isValid) {
    checkGuess(guess)
  }
})


function isValid(guess) {
  return !isNaN(guess) && guess > 0 && guess <= 100;
}

function checkGuess(guess) {
  if (guess > randoNum) {
    lowHigh.innerHTML = 'High'
  } else if (guess < randoNum) {
    lowHigh.innerHTML = 'Low'
  } else if (guess === randoNum) {
    lowHigh.innerHTML = `You Won. Number is ${randoNum}`
  }
}