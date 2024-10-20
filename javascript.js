let userWins = 0;
let userLoses = 0;
let ties = 0;

const Choices = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
};

const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const userPoints = document.getElementById("user-points");
const compPoints = document.getElementById("comp-points");
const gameResult = document.getElementById("game-result");


function showPopup(message, gifUrl) {
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup-gif").src = gifUrl;
    document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    showPopup('Welcome to Rock Paper Scissors! Click "New Game" to start.', "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWQyYTBnNnc3Y3ZsMWZjdWt5ZWtiNGUxNGVmaDZwaHJpbnd6Mnd6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25LbA5gcDNM5N7sHHy/giphy.gif");
    gameResult.textContent = "Rock, Paper, or Scissors?"
})

function newGame() {
    hidePopup();
    gameResult.textContent = "Rock, Paper, or Scissors?"
}


function changeBackgroundImage(userSelection) {
    const userChoiceDiv = document.getElementById("user-choice");
    
    if (userSelection === Choices.ROCK) {
        userChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXlsYXIxMzhiY2lycHcxa3Y2cGZ0eW5jZDQyZm85a2o0OGRkem84ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TejmLnMKgnmPInMQjV/giphy.gif')";
    } else if (userSelection === Choices.PAPER) {
        userChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanc0ODhua29oazdjdDJ6cjJ2cmloYnh2b2pvM3B4cXFha2JiNDJ2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2RoEgmvxXIvA5i/giphy.gif')";
    } else if (userSelection === Choices.SCISSORS) {
        userChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHU3ajB4aXplN2dpbnpvMXV6ZzRyanVhYml4ZTFxc2F6b3gwZ2FzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDaruJgRm1QdFTvnW/giphy.gif')";
    }
}

function getUserChoice(userSelection) {
  
    const computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    updateComputerBackground(computerSelection);
    changeBackgroundImage(userSelection);

    const roundResult = playRound(userSelection, computerSelection);
    console.log(roundResult);
    
}

function updateComputerBackground(computerSelection) {
    const compChoiceDiv = document.getElementById("comp-choice");
    if (computerSelection === Choices.ROCK) {
        compChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXlsYXIxMzhiY2lycHcxa3Y2cGZ0eW5jZDQyZm85a2o0OGRkem84ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TejmLnMKgnmPInMQjV/giphy.gif')";
    } else if (computerSelection === Choices.PAPER) {
        compChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanc0ODhua29oazdjdDJ6cjJ2cmloYnh2b2pvM3B4cXFha2JiNDJ2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2RoEgmvxXIvA5i/giphy.gif')";
    } else if (computerSelection === Choices.SCISSORS) {
        compChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHU3ajB4aXplN2dpbnpvMXV6ZzRyanVhYml4ZTFxc2F6b3gwZ2FzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDaruJgRm1QdFTvnW/giphy.gif')";
    }
}

function simulateComputerChoice(compSelection) {
    let compButton;
    if (compSelection === Choices.ROCK) {
        compButton = document.getElementById("comp-rock-btn");
    } else if (compSelection === Choices.PAPER) {
        compButton = document.getElementById("comp-paper-btn");
    } else if (compSelection === Choices.SCISSORS) {
        compButton = document.getElementById("comp-scissors-btn");
    }
    
    compButton.style.transform = "scale(0.9)";
    
    setTimeout(function() {
        compButton.style.transform = "";  
    }, 1200);  
}

function getComputerChoice() {
    const randomCompValue = Math.random();
    if (randomCompValue < 0.33) {
        compSelection = Choices.ROCK;
    } else if (randomCompValue < 0.66) {
        compSelection = Choices.PAPER;
    } else {
        compSelection = Choices.SCISSORS;
    }
    simulateComputerChoice(compSelection);  
    return compSelection;
}

function capitalizeFirstLetter(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        ties++;
        checkWinner();
        gameResult.textContent = "It's a tie!"
        return "It's a tie!"
    } else if (
        (userSelection === Choices.ROCK && computerSelection === Choices.SCISSORS) ||
        (userSelection === Choices.PAPER && computerSelection === Choices.ROCK) ||
        (userSelection === Choices.SCISSORS && computerSelection === Choices.PAPER) 
    ) {
        userWins++;
        userPoints.textContent = "Player Points: " + userWins;
        checkWinner();
        gameResult.textContent = capitalizeFirstLetter(userSelection) + " beats " + capitalizeFirstLetter(computerSelection) + ", you win!"
        return "You win!"
    } else {
        userLoses++;
        compPoints.textContent = "Computer Points: " + userLoses;
        checkWinner();
        gameResult.textContent = capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(userSelection) + ", you lose!"
        return "You lose!"
    }

}

function checkWinner() {
    if (userWins === 5) {
        showPopup("You win the game! Click 'New Game' to play again.", "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzh4cmNqZHd0YWMzcnBycXl1a3d4OWM5cTRrdGY3cGJnZzZnb3dreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/MeJc0UyMIPLKFhhPcA/giphy.gif");
        resetGame();
      } else if (userLoses === 5) {
        showPopup("The computer wins the game! Click 'New Game' to play again.", "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGxxNW81aTkxbDl0YjUwdml6bjB2amJibGlsa242cTBkYXF0bGduciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sRMPFaVQLGSw8/giphy-downsized-large.gif");
        resetGame();
      }
}

function resetGame() {
    userWins = 0;
    userLoses = 0;
    ties = 0;
    userPoints.textContent = "Player Points: ";
    compPoints.textContent = "Computer Points: ";
    const userChoiceDiv = document.getElementById("user-choice");
    const compChoiceDiv = document.getElementById("comp-choice");
    
    userChoiceDiv.style.backgroundImage = "none"; 
    compChoiceDiv.style.backgroundImage = "none"; 
    
    userChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRyMzYwb2g3ZHFhZjIyNzE2bzJkM3JxbzAzb2thNDN3aGJuNDZ3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D0j8WOBCnAKjvkWDwb/giphy.gif')";
    compChoiceDiv.style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenk5ZXY5dnIyODY0d2tmcmM4N2dmcWlzcWltdmNwcWtlaHdncTRqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Tz30dcgKE3GCTYpxol/giphy.gif')";
}




