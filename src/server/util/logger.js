const chalk = require('chalk');


const print = (string) => console.log(string);
const error = (string) => chalk.red(string);
const warning = (string) => chalk.yellow(string);
const positive = (string) => chalk.green(string);
const heading = (string) => chalk.white.bgBlack(string);
const doubleItem = (string1, string2) => console.log(`${string1} : ${string2}`);

module.exports = {
  print,
  LOG : {
    error,
    warning,
    positive,
    heading,
    doubleItem
  }
}
