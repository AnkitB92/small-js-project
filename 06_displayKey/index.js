// const key = document.getElementById('key');
// const keyCode = document.getElementById('key-code');
// const code = document.getElementById('code');
const display = document.getElementById('display');

window.addEventListener('keydown', (e) => {
  // key.textContent = e.key === ' ' ? '.__.' : e.key;
  // keyCode.textContent = e.keyCode;
  // code.textContent = e.code;

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