const buttons = document.querySelectorAll("button");
const results = document.getElementById("results");

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

/*
function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Choose your weapon:").toLowerCase();
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    if (result === "playerWin") playerWins++;
    if (result === "computerWin") computerWins++;
  }

  console.log("\n");
  console.log(`Final Score`);
  console.log(`------------`);
  console.log(`Player: ${playerWins}`);
  console.log(`Computer: ${computerWins}`);
}

game();
*/

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
}

console.log(results);
