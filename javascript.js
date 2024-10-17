// Use chooses button, triggers game starts. Comp selection, comparison, winner, 
//increase points. Prompt user to pick again, repeat till 5 pts, announce winner.
//each selection triggers corresponding GIF to display. Comp selection triggers
//comp button to change css as if clicked. Game win triggers pop up with new game button.


let userWins = 0;
let userLoses = 0;
let ties = 0;
let userPoints = 0;
let compPoints = 0;


const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")


function showPopup(message) {
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function chooseRock() {
    console.log("clicked rock button!")
}

function choosePaper() {
    console.log("clicked paper button!")
}

function chooseScissors() {
    console.log("clicked scissors button!")
}

document.addEventListener('DOMContentLoaded', function() {
    showPopup('Welcome to Rock Paper Scissors! Click "New Game" to start.');
})

for (let round = 1; round <= 5; round++) {
   
//old code
    //const getUserChoice = prompt("Choose Rock, Paper, or Scissors.").toLowerCase();
  //  if (getUserChoice === "rock" || getUserChoice === "paper" || getUserChoice === "scissors") {
  //      console.log("You chose: " + getUserChoice);
 //   } else {
 //       console.log("Invalid choice, perhaps a typo? Please choose, rock, paper, or scissors without spaces.");
 //   }

    let getUserChoice =    


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


//need DOM events in place of console log. Need div or pop up.
if (userWins > userLoses) {
  console.log("You the win the game!");
} else if (userWins < userLoses) {
  console.log("The computer wins the game!");
} else {
  console.log("It's a tie!");
}



