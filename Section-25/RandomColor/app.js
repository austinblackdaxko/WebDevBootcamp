const button = document.querySelector('button')

button.addEventListener('click', function() {
  document.body.style.backgroundColor = 'olive';
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r}, ${g}, ${b})`
  document.body.style.backgroundColor = newColor
  document.querySelector('h1').innerText = newColor
})

