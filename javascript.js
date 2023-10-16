
const getUserChoice = prompt("Choose Rock, Paper, or Scissors.").toLowerCase();
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
        return "It's a tie!";
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper") 
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }

}

const roundResult = playRound(userSelection, computerSelection);
console.log("Computer chose: " + computerSelection);
console.log(roundResult);


//for loop practice
//for (win = 0; win = 5; win++)