/* 
Rock Paper Scissor Game

1. ask user for move
2. computer will choose move
3. display who won the game
*/

const readline = require('readline-sync');
VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'rock')) {
    prompt('You win!');
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'paper')) {
    prompt('Computer won!');
  } else {
    prompt("It's a tie!");
  }
  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question();
  }
  if (answer[0] !== 'y') break;
}