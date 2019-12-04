let playerScore = 0;
let computerScore = 0;
let draws = 0;

const playerCounter = document.querySelector('#playerScore');
const computerCounter = document.querySelector('#computerScore');
const drawCounter = document.querySelector('#draws');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let computerSelection = computerPlay();

rock.addEventListener('click', function () {
  playRound('rock', computerPlay())
});
paper.addEventListener('click', function () {
  playRound('paper', computerPlay())
});
scissors.addEventListener('click', function () {
  playRound('scissors', computerPlay())
});

function computerPlay() {
  switch (Math.floor(Math.random() * Math.floor(3))) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a draw.")
    draws++;
    displayScore();
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win.")
    playerScore++;
    displayScore();
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose.")
    computerScore++;
    displayScore();
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win.")
    playerScore++;
    displayScore();
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose.")
    computerScore++;
    displayScore();
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win.")
    playerScore++;
    displayScore();
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose.")
    computerScore++;
    displayScore();
  }
}

function displayScore() {
  playerCounter.innerHTML = playerScore;
  computerCounter.innerHTML = computerScore;
  drawCounter.innerHTML = draws;
}

displayScore(playerScore, computerScore);
