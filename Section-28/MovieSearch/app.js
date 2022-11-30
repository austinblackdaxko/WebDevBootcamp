const form = document.querySelector("#searchForm")
const imageContainer = document.querySelector("#imageContainer")

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (imageContainer.firstChild) {
    removeAllChildNodes(imageContainer)
  }
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } }
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data)
  form.elements.query.value = '';
})

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      imageContainer.append(img)
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}