// function callTwice(func) {
//     func();
//     func()
// }

// function rollDice() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDice)

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("CONGRATS! I'm a good function. You win a million dollars")
        }
    }
    else {
        return function() {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
        }
    }
}


function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

