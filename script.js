let playerScore = 0;
let computerScore = 0;
let draws = 0;

const playerCounter = document.querySelector('#playerScore');
const computerCounter = document.querySelector('#computerScore');
const drawCounter = document.querySelector('#draws');
const output = document.querySelector('#output');
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
    output.innerHTML = `Both of you played ${playerSelection}. <b>It's a draw.</b>`;
    draws++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    output.innerHTML = `You played ${playerSelection} and the computer played
        ${computerSelection}. <b>You win!</b>`;
    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    output.innerHTML = `You played ${playerSelection} and the computer played
        ${computerSelection}. <b>You lose!</b>`;
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    output.innerHTML = `You played ${playerSelection} and the computer played
        ${computerSelection}. <b>You win!</b>`;
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    output.innerHTML = `You played ${playerSelection} and the computer played
        ${computerSelection}. <b>You lose!</b>`;
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    output.innerHTML = `You played ${playerSelection} and the computer played
        ${computerSelection}. <b>You win!</b>`;
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    output.innerHTML = `You played ${playerSelection} and the computer played
        ${computerSelection}. <b>You lose!</b>`;
    computerScore++;
  }
  displayScore();
}

function displayScore() {
  playerCounter.innerHTML = playerScore;
  computerCounter.innerHTML = computerScore;
  drawCounter.innerHTML = draws;
}

displayScore();
