// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//   console.log("RESPONSE: ", res)
// })
// .catch((e) => {
//   console.log("ERROR: ", e)
// })


const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
    console.log(res.data)
  } catch (error) {
    console.log("ERROR:", error)
  }
}

const getDadJoke = async () => {

  try {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com', config)
    const oldPar = document.querySelector('p')
    if (oldPar) {
      oldPar.remove()
    }
    const par = document.createElement('p')
    par.innerText = res.data.joke;
    document.body.appendChild(par)
  } catch (error) {
    const oldPar = document.querySelector('p')
    if (oldPar) {
      oldPar.remove()
    }
    const par = document.createElement('p')
    par.innerText = "Sorry, no jokes available at this time";
    document.body.appendChild(par)
  }

}

const button = document.querySelector('button')

button.addEventListener('click', getDadJoke)