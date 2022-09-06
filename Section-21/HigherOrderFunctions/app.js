function callTwice(func) {
    func();
    func()
}

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDice)
