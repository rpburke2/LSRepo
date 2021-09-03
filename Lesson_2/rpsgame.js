/* 

Rock Paper Scissor Game

If player a chooses rock and player b chooses scissors, player a wins.
If player a chooses paper and player b chooses rock, player a wins.
If player a chooses scissors and player b chooses paper, player a wins.
If both players choose the same item, neither player wins. It's a tie.

Our version of the game lets the user play against the computer. The game flow should go like this:

The user makes a choice.
The computer makes a choice.
The winner is displayed.

1. ask user for move
2. computer will choose move
3. display who won the game

*/

const readline = require('readline-sync');
VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

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

  function displayWinner() {
    if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'spock' && computerChoice === 'scissors')) {
      prompt('You win!');
    } else if ((choice === 'rock' && computerChoice === 'paper') ||
      (choice === 'rock' && computerChoice === 'spock') ||
      (choice === 'paper' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'rock') ||
      (choice === 'spock' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'lizard')) {
      prompt('Computer wins!');
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
}

