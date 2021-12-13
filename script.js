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
  let playerWins = 0

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "Rock":
        console.log("It's a tie! Both chose rock.");
        break;
      case "Paper":
        console.log("You lose! Paper beats rock!");
        break;
      case "Scissors":
        console.log("You win! Rock beats scissors!");
        playerWins++;
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "Rock":
        console.log("You win! Paper beats rock!");
        playerWins++;
        break;
      case "Paper":
        console.log("It's a tie! Both chose paper.");
        break;
      case "Scissors":
        console.log("You lose! Scissors beats paper!");
        break;
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "Rock":
        console.log("You lose! Rock beats scissors!");
        break;
      case "Paper":
        console.log("You win! Scissors beats paper!");
        playerWins++;
        break;
      case "Scissors":
        console.log("It's a tie! Both chose scissors.");
        break;
    }
  }
  return playerWins;
}

function game() {
  let playerWins = 0
  i = 1
  while (i <= 5) {
    playerSelection = window.prompt("Please input a move", "");
    computerSelection = computerPlay();
    playerWins += playRound(playerSelection, computerSelection)
    i++;
  }

  if (playerWins > 2) {
    console.log("Congratulations, you win!")
  } else {
    console.log("Aww! You lost :(")
  }
}

game()