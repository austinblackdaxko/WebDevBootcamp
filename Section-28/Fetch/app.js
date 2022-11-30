// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log('resolved!', res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.name);
//     return fetch("https://swapi.dev/api/people/2")
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.name, data.height)
//   })
//   .catch((e) => {
//     console.log("Error!", e);
//   })

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/")
    const data = await res.json();
    console.log(data)
  } catch (error) {
    console.log("Welp, that didn't work!", error)
  }
}

