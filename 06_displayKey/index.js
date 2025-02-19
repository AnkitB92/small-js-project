import { addNav } from '../index.js';


addNav('Display Keys')

const display = document.getElementById('display');

window.addEventListener('keydown', (e) => {

  display.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${e.key === ' ' ? 'spacebar' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </tbody>
    </table>
  `
})