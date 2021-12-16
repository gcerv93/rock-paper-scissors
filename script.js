let playerWins = 0
let computerWins = 0

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const playerMoveDiv = document.createElement('div');
const computerMoveDiv = document.createElement('div');
const roundResults = document.createElement('div');
const scoreDiv = document.createElement('div');

buttons.forEach((button => {
  button.addEventListener('click', updateDisplay);
}))

function updateDisplay(e) {
  playerMove = e.target.classList.value;
  computerMove = computerPlay();

  playerMoveDiv.textContent = `Player move is ${playerMove.toUpperCase()}.`;
  results.appendChild(playerMoveDiv);

  computerMoveDiv.textContent = `Computer move is ${computerMove.toUpperCase()}.`;
  results.appendChild(computerMoveDiv);
  playRound(playerMove, computerMove);

  scoreDiv.textContent = `Player Score: ${playerWins} Computer Score: ${computerWins}`;
  results.appendChild(scoreDiv);
  checkWinner();
}

function computerPlay() {
  let compMoveNum = Math.floor((Math.random() * 3) + 1);

  switch(compMoveNum) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "Rock":
        roundResults.textContent = "It's a tie! Both chose ROCK.";
        break;
      case "Paper":
        roundResults.textContent = "You lose! PAPER beats ROCK!";
        computerWins++;
        break;
      case "Scissors":
        roundResults.textContent = "You win! ROCK beats SCISSORS!";
        playerWins++;
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "Rock":
        roundResults.textContent = "You win! PAPER beats ROCK!";
        playerWins++;
        break;
      case "Paper":
        roundResults.textContent = "It's a tie! Both chose PAPER.";
        break;
      case "Scissors":
        roundResults.textContent = "You lose! SCISSORS beats PAPER!";
        computerWins++;
        break;
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "Rock":
        roundResults.textContent = "You lose! ROCK beats SCISSORS!";
        computerWins++;
        break;
      case "Paper":
        roundResults.textContent = "You win! SCISSORS beats PAPER!";
        playerWins++;
        break;
      case "Scissors":
        roundResults.textContent = "It's a tie! Both chose SCISSORS.";
        break;
    }
  }
  results.appendChild(roundResults);
}

function checkWinner() {
  if (playerWins >= 5) {
    removeAllChildNodes(results);
    results.textContent = "Congratulations!! You win!"
  } else if (computerWins >= 5) {
    removeAllChildNodes(results);
    results.textContent = "Awww, you lost!"
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}