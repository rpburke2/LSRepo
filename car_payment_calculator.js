/* car payment calculator

  - Ask user for Loan Amount
  - Ask user for the Annual Percentage Rate (APR)
  - Ask user for the Loan Duration

  - Calculate Monthly Payment for user
  - Give user Loan Duration in Months
  - Give user Monthly Interest Rate for user


*/


while (true) {
  const readline = require('readline-sync');
  const config = require('./car_payment_config.json');


  function prompt(message) {
    console.log(`=> ${message}`);
  }

  function isValidNumber(number) {
    return number.trim() === '' ||
      Number(number) < 0 ||
      Number.isNaN(Number(number));
  }


  prompt('');
  prompt(`***** ${config.greeting} ******`);
  prompt('');
  prompt(config.term);
  prompt('');


  function getLoanAmount() {
    prompt(config.loanDetails.amount);
    let loanAmount = readline.question();

    while (isValidNumber(loanAmount)) {
      prompt("It looks like you've entered an invalid loan amount! ");
      loanAmount = readline.question();
    }

    return Number(loanAmount);
  }

  function getLoanLength() {
    prompt(config.loanDetails.months);
    let loanMonths = readline.question();

    while (isValidNumber(loanMonths)) {
      prompt("It looks like you've entered an invalid amount of months! ");
      loanMonths = readline.question();
    }

    return Number(loanMonths) * 12;
  }

  function getAPR() {
    prompt(config.loanDetails.apr);
    let loanAPR = readline.question();

    while (isValidNumber(loanAPR)) {
      prompt("It looks like you've entered an invalid APR! ");
      loanAPR = readline.question();
    }

    return Number(loanAPR) / 12 / 100;
  }

  function calculatePayment(amount, months, interest) {
    if (amount === 0) return 0;
    else if (interest === 0) return amount / months;
    else if (months === 0) return amount;

    return amount * (interest / (1 - Math.pow((1 + interest), (-months))));
  }


  let loanAmount = getLoanAmount();

  let loanMonths = getLoanLength();

  let loanAPR = getAPR();

  let monthlyPayment = calculatePayment(loanAmount, loanMonths, loanAPR);


  prompt('----------');
  prompt('');

  prompt(config.loanCalculated.payment.replace('<AMOUNT>', monthlyPayment.toFixed(2)));

  prompt('--');

  prompt(config.loanCalculated.months.replace('<AMOUNT>', loanMonths));

  prompt('--');

  prompt(config.loanCalculated.apr.replace('<AMOUNT>', (loanAPR * 12 * 100).toFixed(2)));

  prompt('');
  prompt('----------');
  prompt('');

  prompt('Would you like to perform another car loan calculation?\n1) Yes 2)No');
  let answer = readline.question();

  if (answer !== '1') break;

}

prompt('Thanks for using our Payment Calculator! See you next time :)');

prompt('');