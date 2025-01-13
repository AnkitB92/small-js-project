const buttons = document.querySelectorAll('.btn');
const main = document.querySelector('main');
const resetBtn = document.querySelector('#reset-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    main.style.backgroundColor = e.target.id;
  })
})

resetBtn.onclick = function () {
  main.style.backgroundColor = '';
}