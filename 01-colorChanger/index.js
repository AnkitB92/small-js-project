const buttons = document.querySelectorAll('.btn');
const main = document.querySelector('main');


buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    main.style.backgroundColor = e.target.id;
  })
})
