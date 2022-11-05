
function getComputerChoice(){
    randomInt = Math.floor(Math.random()*100);
    let computerChoice = '';
    if (randomInt <= 33) {
        computerChoice = 'Rock';
    }
    else if (randomInt > 33 && randomInt <= 66) {
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

/*
Rock beats Scissors
Scissors beats Paper
Paper beats Rock
if they're same, try again - draw
*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = capitalizeFirstLetter(playerSelection);
    let result = '';
    if ((playerSelection != 'Rock') && (playerSelection != 'Scissors') &&
        (playerSelection != 'Paper')){
        result = "You can't use that. Try entering Rock, Paper, or Scissors.";
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock')){
                result = `You chose ${playerSelection}. The computer\'s choice was ${computerSelection}.
                            ${playerSelection} beats ${computerSelection}. You win!`;
                playerScore = playerScore+1;
    }
    else if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
            (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
            (computerSelection === 'Paper' && playerSelection === 'Rock')){
                result = `You chose ${playerSelection}. The computer\'s choice was ${computerSelection}.
                            ${computerSelection} beats ${playerSelection}. You lose!`;
                computerScore = computerScore+1;
    }
    else {
        result = `You chose ${playerSelection}. 
                    The computer also chose ${computerSelection}. T'was a draw!`;
    }
    
    return result; 
}

function game(playerSelection, computerSelection){
    
    let score = '';
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt(`Game ${i+1} of 5: Please enter Rock, Paper, or Scissors`, "Rock");
        var computerSelection = getComputerChoice();
        //console.log(`Game ${i+1}: `+ playRound(playerSelection, computerSelection));
        document.getElementById("result").innerHTML += `Game ${i+1}: `+
            playRound(playerSelection, computerSelection) + '<br><br>';
        score = `Current Score: You scored ${playerScore} 
                and the computer scored ${computerScore} <br><br>`;
    }
    if (playerScore > computerScore) {
        document.getElementById("result").innerHTML += `You won ${playerScore} times.
          Computer won ${computerScore}. You won the best of 5!<br><br>`;
    }
    else if (playerScore < computerScore) {
        document.getElementById("result").innerHTML += `You won ${playerScore} times.
          Computer won ${computerScore}. You lost the best of 5 :( <br><br>`;
    }
    else {
        document.getElementById("result").innerHTML += `You won ${playerScore} times.
          Computer won ${computerScore}. It was a tie<br><br>`;
    }

}

var playerScore = 0;
var computerScore = 0;
console.log(game())