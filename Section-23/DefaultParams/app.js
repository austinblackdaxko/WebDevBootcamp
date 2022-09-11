function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(msg = "Hey There", person) {
    return `${msg}, ${person}!`
}