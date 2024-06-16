
let userWins = 0;
let userLoses = 0;
let ties = 0;

for (let round = 1; round <= 5; round++) {
   

// const getUserChoice = prompt("Choose Rock, Paper, or Scissors.").toLowerCase();
if (getUserChoice === "rock" || getUserChoice === "paper" || getUserChoice === "scissors") {
    console.log("You chose: " + getUserChoice);
} else {
    console.log("Invalid choice, perhaps a typo? Please choose, rock, paper, or scissors without spaces.");
}

function getComputerChoice() {
    const randomCompValue = Math.random();
    if (randomCompValue < 0.33) {
        return "rock";
    } else if (randomCompValue < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
 
const computerSelection = getComputerChoice();

const userSelection = getUserChoice;


function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        ties++;
        return "It's a tie!";
       
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper") 
    ) {
        userWins++;
        return "You win!";
    } else {
        userLoses++;
        return "You lose!";
    }

}
console.log("Computer chose: " + computerSelection);



const roundResult = playRound(userSelection, computerSelection);
console.log(roundResult);

}



if (userWins > userLoses) {
  console.log("You the win the game!");
} else if (userWins < userLoses) {
  console.log("The computer wins the game!");
} else {
  console.log("It's a tie!");
}

