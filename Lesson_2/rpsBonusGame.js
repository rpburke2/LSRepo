/* 

Rock Paper Scissor Game with Lizard and Spock Bonus

1. ask user for choice
2. computer will choose choice
3. display who won the game
4. user asked if they would liked to play again

*/


const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 's', 'l', 'd'];
let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];
let gameCount = 0;
let playerScore = 0;
let computerScore = 0;
let replayAnswer = '';
let choice = '';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

const RULES = `Welcome to Rock, Paper, Scissors, Lizard, Spock.

=> You vs Machine! First to 3 wins will be triumphant!

=> Check out how to win below:

=> Paper beats Rock
=> Scissors beats Paper
=> Rock beats Scissors
=> Rock beats Lizard
=> Lizard beats Doctor Spock
=> Doctor Spock beats Scissors
=> Scissors beats Lizard
=> Lizard beats Paper
=> Paper beats Doctor Spock
=> Doctor Spock beats Rock
`;

const COMMANDS = `You can use the following commands:
=> Press r for Rock
=> Press p for Paper
=> Press s for Scissors
=> Press l for Lizard
=> Press d for Doctor Spock
`;

const WINNING_COMBOS = {
  'rock': ['scissors', 'lizard'],
  'paper': ['rock', 'Doctor Spock'],
  'scissors': ['paper', 'lizard'],
  'lizard': ['paper', 'Doctor Spock'],
  'Doctor Spock': ['rock', 'scissors']
};

function printRules() {
  console.clear();
  prompt(RULES);
  prompt('Press Enter to continue');
  readline.question();
}

function printCommands() {
  console.clear();
  prompt(COMMANDS);
  prompt('Press Enter to continue');
  readline.question();
}

function firstGameDisplay() {
  if (gameCount === 0) {
    printRules();
    printCommands();
    gameCount += 1;
    console.clear();
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function computerWins(computerChoice, choice) {
  return WINNING_COMBOS[computerChoice].includes(choice);
}

function getChoice() {
  prompt(`Choose one :(r)ock , (p)aper, (s)issors, (l)izard, (d)octor spock }`);
  choice = readline.question();
  choice = choice.toLowerCase();
  while (!VALID_CHOICES.includes(choice.toLowerCase())) {
    prompt("That won't work, we need a valid input!");
    choice = readline.question();
    choice = choice.toLowerCase();
  }
  return choice;
}

function getComputerChoice() {
  randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}


function convertChoice(choice) {
  switch (choice.toLowerCase()) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 's':
      choice = 'scissors';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 'd':
      choice = 'Doctor Spock';
      break;
  }
  return choice;
}

function getPlayerAndComputerChoices() {
  getChoice();
  choice = convertChoice(choice);
  getComputerChoice();
  computerChoice = convertChoice(computerChoice);
}



function roundWinner(choice, computerChoice) {
  console.clear();
  prompt(`You chose ${choice}, computer chose ${computerChoice} `);
  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
    prompt(`You Won round ${gameCount} *** SCORE => computer[${computerScore}] player[${playerScore}]`);
  } else if (computerWins(computerChoice, choice)) {
    computerScore += 1;
    prompt(`Computer wins round ${gameCount} *** SCORE => computer[${computerScore}] player[${playerScore}]`);
  } else {
    prompt(`Round ${gameCount} was a tie! *** SCORE => computer[${computerScore}] player[${playerScore}]`);
  }
}


function noWinner() {
  if (playerScore === 3) {
    return false;
  } else if (computerScore === 3) {
    return false;
  }
  return true;
}


function finalWinner() {
  console.clear();
  if (playerScore > computerScore) {
    prompt(`You are victorious! Final Score => You: [${playerScore}] Computer: [${computerScore}]`);
  } else if (playerScore < computerScore) {
    prompt(`The Machines have bested you! Final Score => You: [${playerScore}] Computer:: [${computerScore}]`);
  } else {
    prompt(`It's a tie! Final Score => You: [${playerScore}] Computer: [${computerScore}]`);
  }
}


function playAgain() {
  prompt("Would you like to Rochambeau again? Enter 'y' to play again or 'n' to exit the game.");
  replayAnswer = readline.question();
  while (replayAnswer[0] !== 'n' && replayAnswer[0] !== 'y') {
    console.clear();
    prompt("Please enter 'y' to play again or 'n' if you've had enough!");
    replayAnswer = readline.question();
  }
  return replayAnswer;
}


function endGame() {
  if (replayAnswer[0] !== 'y') {
    console.clear();
    console.log('Hey - thanks for playing Rock, Paper, Scissors, Lizard, Spock!');
    return true;
  } else {
    console.clear();
    gameCount = 1;
    playerScore = 0;
    computerScore = 0;
    return false;
  }
}

while (true) {
  do {
    firstGameDisplay();
    getPlayerAndComputerChoices();
    roundWinner(choice, computerChoice);
  } while (noWinner());
  finalWinner();
  playAgain();
  if (endGame()) {
    break;
  }
}