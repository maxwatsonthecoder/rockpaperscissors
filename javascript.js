// Finalize design so it's not an eyesore. Add label for which side is player.
// Reset GIFs at game startup.


let userWins = 0;
let userLoses = 0;
let ties = 0;

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

function simulateComputerChoice(compSelection) {
    let compButton;
    if (compSelection === 'rock') {
        compButton = document.getElementById("comp-rock-btn");
    } else if (compSelection === 'paper') {
        compButton = document.getElementById("comp-paper-btn");
    } else if (compSelection === 'scissors') {
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
        compSelection = "rock";
    } else if (randomCompValue < 0.66) {
        compSelection = "paper";
    } else {
        compSelection = "scissors";
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
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper") 
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
    document.getElementById("user-choice").style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRyMzYwb2g3ZHFhZjIyNzE2bzJkM3JxbzAzb2thNDN3aGJuNDZ3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D0j8WOBCnAKjvkWDwb/giphy.gif')";
    document.getElementById("comp-choice").style.backgroundImage = "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenk5ZXY5dnIyODY0d2tmcmM4N2dmcWlzcWltdmNwcWtlaHdncTRqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Tz30dcgKE3GCTYpxol/giphy.gif')";
}




