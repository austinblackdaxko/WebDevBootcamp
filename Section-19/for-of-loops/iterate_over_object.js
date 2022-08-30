const testScore = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
  vincent: 65
}

// for(let person in testScore) {
//   if(testScore[person] <= 60) {
//     console.log(`${person} scored ${testScore[person]}. Come see me after class`);
//   }
//   else if(testScore[person] < 70) {
//     console.log(`${person} scored ${testScore[person]}. You can do better`);
//   }
//   else if(testScore[person] < 80) {
//     console.log(`${person} scored ${testScore[person]}. Passing but a B would be better`);
//   }
//   else if(testScore[person] < 90) {
//     console.log(`${person} scored ${testScore[person]}. Good job!`);
//   }
//   else if(testScore[person] > 90) {
//     console.log(`${person} scored ${testScore[person]}. Great job! You get a pizza party`);
//   }
// }

let total = 0;
for(let score of Object.values(testScore)) {
  console.log(score)
  total += score
}

let numberOfStudents = Object.keys(testScore).length;

console.log(`The average score of the class is ${Math.round(total/numberOfStudents)}`)

