// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let div = document.querySelector('.pokemonJail')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'


for (let i = 0; i < 200; i++) {
  const pokemon = document.createElement('div')
  pokemon.classList.add('pokemon')
  const label = document.createElement('span')
  const newImg = document.createElement('img');
  newImg.src = `${baseURL}/${i + 1}.png`
  label.innerText = `${i + 1}`
  pokemon.appendChild(newImg)
  pokemon.appendChild(label)
  div.append(pokemon)
}