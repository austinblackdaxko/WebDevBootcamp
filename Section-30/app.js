const tdTags = document.querySelectorAll(".text-left");
const searchText = "automation.test@example.com";
let found;

for (let i = 0; i < tdTags.length; i++) {
  if (tdTags[i].innerText == searchText) {
    tdTags[i].click()
    break;
  }
}