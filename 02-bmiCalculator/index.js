const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const result = document.querySelector('.result')


  if ((!height || isNaN(height) || height <= 0) && (!weight || isNaN(weight) || weight <= 0)) {
    result.innerHTML = 'Invalid height & weight';
  } else if (!height || isNaN(height) || height <= 0) {
    result.innerHTML = 'Invalid height';
  } else if (!weight || isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Invalid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    result.innerHTML = `BMI: ${bmi} kg/m² (${findBMI(bmi)})`;
  }
})


function findBMI(bmiValue) {
  if (bmiValue < 18.5) return 'Underweight';
  else if (bmiValue >= 18.5 && bmiValue <= 25) return 'Normal';
  else if (bmiValue > 25) return 'Overweight';
  return 'Invalid BMI';
}
