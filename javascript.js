//still need to add points, ui announcement who wins each round, at top,
//winner/loser gif to pop up. Finalize design so it's not an eyesore.


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

document.addEventListener('DOMContentLoaded', function() {
    showPopup('Welcome to Rock Paper Scissors! Click "New Game" to start.');
})

function newGame() {
    hidePopup();
}

document.getElementById("rock-btn").addEventListener("click", function() {
    changeBackgroundImage('rock');
});
document.getElementById("paper-btn").addEventListener("click", function() {
    changeBackgroundImage('paper');
});
document.getElementById("scissors-btn").addEventListener("click", function() {
    changeBackgroundImage('scissors');
});

function changeBackgroundImage(userSelection) {
    const userChoiceDiv = document.getElementById("user-choice");
    
    if (userSelection === 'rock') {
        userChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXlsYXIxMzhiY2lycHcxa3Y2cGZ0eW5jZDQyZm85a2o0OGRkem84ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TejmLnMKgnmPInMQjV/giphy.gif')";
    } else if (userSelection === 'paper') {
        userChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanc0ODhua29oazdjdDJ6cjJ2cmloYnh2b2pvM3B4cXFha2JiNDJ2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2RoEgmvxXIvA5i/giphy.gif')";
    } else if (userSelection === 'scissors') {
        userChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHU3ajB4aXplN2dpbnpvMXV6ZzRyanVhYml4ZTFxc2F6b3gwZ2FzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDaruJgRm1QdFTvnW/giphy.gif')";
    }
}

function getUserChoice(userSelection) {
  
    const computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    updateComputerBackground(computerSelection);

    const roundResult = playRound(userSelection, computerSelection);
    console.log(roundResult);
    
}

function updateComputerBackground(computerSelection) {
    const compChoiceDiv = document.getElementById("comp-choice");
    if (computerSelection === 'rock') {
        compChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXlsYXIxMzhiY2lycHcxa3Y2cGZ0eW5jZDQyZm85a2o0OGRkem84ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TejmLnMKgnmPInMQjV/giphy.gif')";
    } else if (computerSelection === 'paper') {
        compChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanc0ODhua29oazdjdDJ6cjJ2cmloYnh2b2pvM3B4cXFha2JiNDJ2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2RoEgmvxXIvA5i/giphy.gif')";
    } else if (computerSelection === 'scissors') {
        compChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHU3ajB4aXplN2dpbnpvMXV6ZzRyanVhYml4ZTFxc2F6b3gwZ2FzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDaruJgRm1QdFTvnW/giphy.gif')";
    }
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

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        ties++;
        checkWinner();
        return "It's a tie!";
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper") 
    ) {
        userWins++;
        checkWinner();
        return "You win!";
    } else {
        userLoses++;
        checkWinner();
        return "You lose!";
    }

}

function checkWinner() {
    if (userWins === 5) {
        showPopup("You win the game! Click 'New Game' to play again.");
        resetGame();
      } else if (userLoses === 5) {
        showPopup("The computer wins the game! Click 'New Game' to play again.");
        resetGame();
      }
}

function resetGame() {
    userWins = 0;
    userLoses = 0;
    ties = 0;
}




