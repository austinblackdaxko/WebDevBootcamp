let maximum = parseInt(prompt("Enter the maximum number"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number please!"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  if (guess > targetNum) {
    guess = prompt("Too high! enter a new guess (to quit, enter 'q')");
    attempts++;
  }
  else {
    guess = prompt("Too low! enter a new guess (to quit, enter 'q')");
    attempts++;
  }
}

if (guess === 'q') {
  console.log(`Too bad! So sad. the answer is ${targetNum}, it took you ${attempts} attempts before giving up`);
}
else {
  console.log(`You got it! it only took you ${attempts} guesses`);
}