/* car payment calculator

  - Ask user for Loan Amount
  - Ask user for the Annual Percentage Rate (APR)
  - Ask user for the Loan Duration
  - Calculate Monthly Interest Rate
  - Loan Duration in Months

  - Monthly payment - m - 
  - Loan amount - p - loanDetials.amount
  - Monthly interest rate - j - loanDetails.apr
  - Loan during in months - n - loanDetials.months


*/



const readline = require('readline-sync');
const config = require('./car_payment_config.json');

config.loanMonths.replace('<AMOUNT>', 123123)

let monthlyPayment = loanDetails.amount * (loanDetails.apr / (1 - Math.pow((1 + j), (-n))));