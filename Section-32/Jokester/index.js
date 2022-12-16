const jokes = require('give-me-a-joke') 
const colors = require('colors')
const cowsay = require()

// console.log(jokes)

const getJoke = jokes.getRandomDadJoke(function(joke) {
  return joke
})

console.log(cowsay.say({
  text: 'hello'
}));