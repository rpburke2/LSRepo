/* car payment calculator

  - Ask user for Loan Amount
  - Ask user for the Annual Percentage Rate (APR)
  - Ask user for the Loan Duration
  - Calculate Monthly Interest Rate
  - Loan Duration in Months

  - Monthly payment - m - 
  - Loan amount - p - loanDetials.amount
  - Monthly interest rate - j - loanDetails.apr
  - Loan duration in months - n - loanDetials.months


*/



const readline = require('readline-sync');
const config = require('./car_payment_config.json');
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

function prompt(message) {
  console.log(`=> ${message}`);
}

function isValidNumber(number) {
  return number.trim() === '' ||
  Number(number) < 0 ||
  Number.isNaN(Number(number));
}


prompt('--------------------------------');

prompt(config.greeting);

prompt('--------------------------------');

function getLoanAmount() {
  prompt(config.loanDetails.amount); 
  let loanAmount = readline.question();

  while (loanAmount < 0 || Number.isNaN(Number(loanAmount)) || loanAmount.trimStart() === '') {
    prompt("It looks like you've entered an invalid loan amount! ");
    loanAmount = readline.question();
  }

  return Number(loanAmount);
}

function getLoanLength() {
  prompt(config.loanDetails.months);
  let loanMonths = readline.question();

  while (loanMonths < 0 || Number.isNaN(Number(loanMonths)) || loanMonths.trimStart() === '' || (((loanMonths * 12) % 12) !== 0)); {
    prompt("It looks like you've entered an invalid amount of years! ");
    loanMonths = readline.question();
  }

  return Number(loanMonths) * 12;
}

function getAPR() {
  prompt(config.loanDetails.apr);
  let loanAPR = readline.question();

  while (loanAPR > 100 || loanAPR < 0 || Number.isNaN(Number(loanAPR)) || loanAPR.trimStart() === '') {
    prompt("It looks like you've entered an invalid APR! ");
    loanAPR = readline.question();
  }

  return Number(loanAPR) / 12 / 200;
}

let loanAmount = getLoanAmount();

let loanMonths = getLoanLength();

let loanAPR = getAPR();

let monthlyPayment = loanAmount * (loanAPR / (1 - Math.pow((1 + loanAPR), (-loanMonths))));


console.log(config.loanCalculated.payment.replace('<AMOUNT>', monthlyPayment));


console.log('Thanks for using our Payment Calculator!!');