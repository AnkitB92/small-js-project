import { addNav } from '../index.js';


addNav('Digital Clock');

const clock = document.getElementById('clock');
clock.innerHTML = new Date().toLocaleTimeString();

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);