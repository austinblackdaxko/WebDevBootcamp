const figlet = require("figlet");
const colors = require('colors');

const arguments = process.argv.splice(2);

function concatenateWords(array) {
  const fullString = array.join(' ');
  return fullString;
}

const figletString = concatenateWords(arguments)

figlet(figletString, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});
