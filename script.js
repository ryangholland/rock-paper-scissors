const buttons = document.querySelectorAll("button");
const results = document.getElementById("results");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

function getComputerChoice() {
  const CHOICES = ["rock", "paper", "scissors"];
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      results.textContent = `Tie. You and computer both chose rock.`;
      return "tie";
    } else if (computerChoice === "paper") {
      results.textContent = `Computer wins the round! Computer's paper beat your rock.`;
      return "computerWin";
    } else if (computerChoice === "scissors") {
      results.textContent = `You win the round! Your rock beat computer's scissors.`;
      return "playerWin";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      results.textContent = `You win the round! Your paper beat computer's rock.`;
      return "playerWin";
    } else if (computerChoice === "paper") {
      results.textContent = `Tie. You and computer both chose paper.`;
      return "tie";
    } else if (computerChoice === "scissors") {
      results.textContent = `Computer wins the round! Computer's scissors beat your paper.`;
      return "computerWin";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      results.textContent = `Computer wins the round! Computer's rock beat your scissors.`;
      return "computerWin";
    } else if (computerChoice === "paper") {
      results.textContent = `You win the round! Your scissors beat computer's paper.`;
      return "playerWin";
    } else if (computerChoice === "scissors") {
      results.textContent = `Tie. You and computer both chose scissors.`;
      return "tie";
    }
  }
}

function updateScoreDisplays() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function endGame(winner) {
  results.textContent = `Game over! ${winner} wins!`;

  for (let button of buttons) {
    button.removeEventListener("click", handleClick);
  }
}

function handleClick(e) {
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();
  let result = playRound(playerChoice, computerChoice);

  if (result === "playerWin") playerScore++;
  if (result === "computerWin") computerScore++;

  updateScoreDisplays();

  if (playerScore === 5) endGame("Player");
  if (computerScore === 5) endGame("Computer");
}

let playerScore = 0;
let computerScore = 0;

for (let button of buttons) {
  button.addEventListener("click", handleClick);
}