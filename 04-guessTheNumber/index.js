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


let prevGuess = [];
let attempts = 10;
let msg = '';

console.log(randoNum);

update('Start Guessing');
userInput.focus();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const guess = parseInt(userInput.value);

  if (isValid(guess)) {
    checkGuess(guess);
  } else {
    customAlert(msg);
  }
})

endBtn.addEventListener('click', endGame)

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

  if (attempts === 0) return;

  attempts--;
  prevGuess.push(guess);
  form.reset();

  if (guess > randoNum) {
    update('High');
  } else if (guess < randoNum) {
    update('Low');
  } else if (guess === randoNum) {
    update(`You Won. Number is ${randoNum}`);
    endGame();
  }

  if (attempts === 0) {
    endGame();
    console.log('No attempts left');
  }
}

function update(lowHighMsg) {
  showChances.innerHTML = attempts;
  lowHigh.innerHTML = lowHighMsg;
  guesses.innerHTML = prevGuess.join(',') || 'None';
}

function customAlert() {
  console.log(msg);
}


function endGame() {
  userInput.setAttribute('disabled', 'true');
  submitBtn.classList.remove('hover');
  submitBtn.style.cursor = 'default';
  submitBtn.setAttribute('disabled', 'true');
}