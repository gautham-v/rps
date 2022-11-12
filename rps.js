function getComputerChoice(){
    randomInt = Math.floor(Math.random()*100);
    let computerChoice = '';
    if (randomInt <= 33) {
        computerChoice = 'rock';
    }
    else if (randomInt > 33 && randomInt <= 66) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound(e) {
    let result = '';
    const computerSelection = getComputerChoice();
    //const newline = '\r\n'
    playerSelection = this.classList.value;

    if (playerScore === 5){
        result = 'Final score reached. You won!!! 😀';
        gameover.textContent = result;
        gameover.setAttribute('style', 'color: #2fa745')
        return result;
    } 
    else if (computerScore === 5){
        result = 'Final score reached. Computer won 😔';
        gameover.textContent = result;
        gameover.setAttribute('style', 'color: #e61717')
        return result;
    }
    else {
        console.log(playerSelection);
        console.log(computerSelection);
        if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')){
                result = `Game ${gameCount}: You chose ${playerSelection}. The computer\'s choice was ${computerSelection}.
                            ${playerSelection} beats ${computerSelection}. You win!`;
                playerScore = playerScore+1;
        }
        else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
                (computerSelection === 'scissors' && playerSelection === 'paper') ||
                (computerSelection === 'paper' && playerSelection === 'rock')){
                    result = `Game ${gameCount}: You chose ${playerSelection}. The computer\'s choice was ${computerSelection}.
                                ${computerSelection} beats ${playerSelection}. You lose!`;
                    computerScore = computerScore+1;
        }
        else {
            result = `Game ${gameCount}: You chose ${playerSelection}. 
                        The computer also chose ${computerSelection}. T'was a draw!`;
        }      
    }
    gameCount++;
    
    const roundDiv = document.createElement('div');

    roundDiv.classList.add('score');
    roundDiv.setAttribute('style', 'font-size: 80%')
    roundDiv.textContent = result;
    container.appendChild(roundDiv);

    gameScore.textContent = `Your score: ${playerScore} Computer's score: ${computerScore}`;

    return result; 
}

var playerScore = 0;
var computerScore = 0;
var gameCount = 1;

const container = document.querySelector('#container');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const gameScore = document.querySelector('.gameScore');
const gameover = document.querySelector('.gameover');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);