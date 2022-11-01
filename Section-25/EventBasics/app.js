const btn = document.querySelector('#v2')

btn.onclick = function() {
  console.log("you clicked me!")
}

function scream() {
  console.log('AHH')
  console.log('STOP TOUCH ME')
}

function thanks() {
  console.log('phew thanks')
}

btn.onmouseenter = scream;

btn.onmouseleave = thanks;

document.querySelector('h1').onclick = function () {
  // alert('you clicked the h1, how dare you!')
  const image = document.createElement('img')
  image.src = 'https://media.tenor.com/pO0TcsNV6DoAAAAC/greta-how-dare-you.gif'
  document.body.appendChild(image)
  
}

const btn3 = document.querySelector('#v3')

btn3.addEventListener('click', scream)

function twist() {
  console.log("TWIST")
}

function shout() {
  console.log("shout")
}

const tasButton = document.querySelector('#tas')

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)

