

export function addNav(active) {

  const menu = document.querySelector('.menu');

  if (!menu) return;

  const items = [
    {
      name: 'Color Changer',
      href: '01-colorchanger/index.html'
    },
    {
      name: 'BMI Calculator',
      href: '02-bmicalculator/index.html'
    },
    {
      name: 'Digital Clock',
      href: '03-digitalClock/index.html'
    },
    {
      name: 'Guess The Number',
      href: '04-guessTheNumber/index.html'
    },
    {
      name: 'Random Color Generator',
      href: '05-randomColorGenerator/index.html'
    },
    {
      name: 'Display Keys',
      href: '06_displayKey/index.html'
    },
  ]

  const menuList = document.createElement('div');
  menuList.classList.add('menu-list');

  items.map(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.name;

    active === item.name && link.classList.add('active');
    menuList.appendChild(link);
  })

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = 'menu-check';

  menu.append(checkBox, menuList);
}
