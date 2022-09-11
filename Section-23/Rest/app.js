// function sum() {
//     return arguments.reduce((total, num) => total + num)
// }

function sum(...nums) {
    console.log(nums)
    return nums.reduce((total, num) => total + num)
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`gold medal goes to ${gold}`)
    console.log(`silver medal goes to ${silver}`)
    console.log(`And thanks to everyone else, ${everyoneElse}`)
}