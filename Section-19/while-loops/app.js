// let count = 0;
// while(count < 10) {
//     count++;
//     console.log(count)
// }

// const secret = "BabyHippo"

// let guess = prompt('Enter the secret code!');

// while(guess !== secret) {
//   guess = prompt('Enter the secret code!');
// }

// console.log('CONGRATS YOU GOT THE SECRET!!!!1!')


let input = prompt('Hey, say something!')
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === 'stop copying me') {
    break;
  }
}
console.log('okay, you win')