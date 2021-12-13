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
        return "It's a tie! Both chose rock."
      case "Paper":
        return "You lose! Paper beats rock!"
      case "Scissors":
        return "You win! Rock beats scissors!"
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "Rock":
        return "You win! Paper beats rock!"
      case "Paper":
        return "It's a tie! Both chose paper."
      case "Scissors":
        return "You lose! Scissors beats paper!"
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "Rock":
        return "You lose! Rock beats scissors!"
      case "Paper":
        return "You win! Scissors beats paper!"
      case "Scissors":
        return "It's a tie! Both chose scissors."
    }
  }
}

// const playerSelection = "roCk";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));