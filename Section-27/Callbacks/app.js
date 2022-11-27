console.log("Sending request to server")
setTimeout(() => {
  console.log('Here is your data from the server...')

}, 3000)
console.log("I'm at the end")



// setTimeout(() => {
//   document.body.style.backgroundColor = 'red'
// }, 1000)

// setTimeout(() => {
//   document.body.style.backgroundColor = 'orange'
// }, 2000)

// setTimeout(() => {
//   document.body.style.backgroundColor = 'yellow'
// }, 3000)

// Nested timeouts fixes this ^

// setTimeout(() => {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'yellow';
//     }, 1000)
//   }, 1000)
// }, 1000)


const delayedColorChange =  (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay)
}

delayedColorChange('red', 1000, () => {
  delayedColorChange('orange', 1000, () => {
    delayedColorChange('yellow', 1000, () => {
      delayedColorChange('green', 1000, () => {
        delayedColorChange('blue', 1000, () => {
          delayedColorChange('indigo', 1000, () => {
            delayedColorChange('violet', 1000)
          })
        })
      })
    })
  })
});

