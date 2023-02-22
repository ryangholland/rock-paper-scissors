function getComputerChoice() {
  const CHOICES = ["rock", "paper", "scissors"];
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      console.log(`Tie. You and computer both chose rock.`);
    } else if (computerChoice === "paper") {
      console.log(`Computer wins the round! Computer's paper beat your rock.`);
    } else if (computerChoice === "scissors") {
      console.log(`You win the round! Your rock beat computer's scissors.`);
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log(`You win the round! Your paper beat computer's rock.`);
    } else if (computerChoice === "paper") {
      console.log(`Tie. You and computer both chose paper.`);
    } else if (computerChoice === "scissors") {
      console.log(
        `Computer wins the round! Computer's scissors beat your paper.`
      );
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log(
        `Computer wins the round! Computer's rock beat your scissors.`
      );
    } else if (computerChoice === "paper") {
      console.log(`You win the round! Your scissors beat computer's paper.`);
    } else if (computerChoice === "scissors") {
      console.log(`Tie. You and computer both chose scissors.`);
    }
  }
}

let playerChoice = prompt("Choose your weapon:").toLowerCase();
let computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);
