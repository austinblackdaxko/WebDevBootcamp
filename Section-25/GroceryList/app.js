const form = document.querySelector("#groceryList");

const list = document.querySelector("ul")

const inputField = document.querySelector("input")

form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("SUBMITTED!")
  const newItem = document.createElement('li')
  newItem.innerText = inputField.value
  list.appendChild(newItem)
  inputField.value = ''
})