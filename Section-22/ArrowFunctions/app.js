// const add = (x, y) => {
//     return x + y;
// }

const add = (a, b) => a + b

const square = (x) => {
    return x ** 2;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }


const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// section for this and arrow functions

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout( () => {
            console.log(`${this.fullName().toUpperCase()}!!!!`)
        }, 3000)
    }
}
