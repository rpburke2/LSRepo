// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

const config = require('./calculator_config.json');

const readline = require('readline-sync');


function prompt(message) {
  console.log(`${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(config.greeting);

while (true) {
  prompt(config.question.one);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(config.question.oops)
    number1 = readline.question();
  }

  prompt(config.question.two);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(config.question.oops)
    number2 = readline.question();
  }

  prompt(config.question.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(config.question.chooseOp)
    operation = readline.question();
  }

  let output;
  if (operation === '1') {
    output = Number(number1) + Number(number2);
  } else if (operation === '2') {
    output = Number(number1) - Number(number2);
  } else if (operation === '3') {
    output = Number(number1) * Number(number2);
  } else if (operation === '4') {
    output = Number(number1) / Number(number2);
  }

  prompt(`The result is ${output}.`);

  prompt('-----------------------------');

  prompt('Would you like to perform another calculation?\n1) Yes 2)No');
  let answer = readline.question();

  if (answer !== '1') break;
}