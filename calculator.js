// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

require('./calculator_config.json')

const readline = require('readline-sync');


function prompt(message) {
  console.log(`${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

greeting;

while (true) {
  prompt('What is the first number?');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("hmmm...that doesn't look like a valid number.")
    number1 = readline.question();
  }

  prompt('What is the second number?');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("hmmm...that doesn't look like a valid number.")
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("You must choose 1, 2, 3 or 4.")
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

  prompt('Would you like to perform another calculation?\n1) Yes 2)No');
  let answer = readline.question();

  if (answer !== '1') break;
}