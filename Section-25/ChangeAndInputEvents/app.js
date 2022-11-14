const input = document.querySelector('input');
const h1 = document.querySelector('h1')

input.addEventListener('change', function () {
  console.log('I have changed')
})

input.addEventListener('input', function () {
  h1.innerText = input.value
  // console.log(e)
})