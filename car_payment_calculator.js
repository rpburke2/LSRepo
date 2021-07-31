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

function prompt(message) {
  console.log(`${message}`);
}

//config.loanMonths.replace('<AMOUNT>', 123123)


prompt(config.greeting);

prompt(config.loanDetails.amount); 
let loanAmount = readline.question();

prompt(config.loanDetails.months);
let loanMonths = readline.question();

prompt(config.loanDetails.apr);
let loanAPR = readline.question();


let monthlyPayment = loanAmount * (loanAPR / (1 - Math.pow((1 + j), (-loanMonths))));