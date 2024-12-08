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

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (canPlay) {
    const guess = parseInt(userInput.value);
    console.log(guess)
    console.log(typeof guess)
  }

  if (!canPlay) {
    console.log('you cannot play')
  }
})