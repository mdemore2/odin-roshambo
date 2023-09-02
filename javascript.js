const choices = ['Rock', 'Paper', 'Scissors'];
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        return 'Draw!';
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS')
        {
            return 'You win! Rock beats scissors!';
        }
        else if (computerSelection === 'PAPER')
        {
            return 'You lose! Paper covers rock!';
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK'){
            return 'You win! Paper covers rock!';
        }
        else if (computerSelection === 'SCISSORS'){
            return 'You lose! Scissors cut paper!';
        }
    }
    else if (playerSelection === 'SCISSORS'){
        if (computerSelection === 'ROCK'){
            return 'You lose! Rock beats scissors!';
        }
        else if (computerSelection === 'PAPER'){
            return 'You win! Scissors cut paper!';
        }
    }
}

function autoGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++){
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }
    console.log('FINAL SCORE: ' + playerScore + ' - ' + computerScore);
    if (playerScore == computerScore){
        console.log("It's a draw!");
    } else if (playerScore > computerScore){
        console.log('You win!');
    } else {
        console.log('You lose!');
    }
}

function playGameOnClick(e) {
    console.log(e.currentTarget.className);
    let playerSelection = e.currentTarget.className;
    let result = playRound(playerSelection, getComputerChoice());
    displayResult(result);
    console.log(result);
}

function displayResult(result) {

    if (result.includes('win')) {
        playerScore++;
    } else if (result.includes('lose')) {
        computerScore++;
    }

    roundCount++;
    if (roundCount == 5) {
        console.log('FINAL SCORE: ' + playerScore + ' - ' + computerScore);
        if (playerScore == computerScore){
            console.log("It's a draw!");
        } else if (playerScore > computerScore){
            console.log('You win!');
        } else {
            console.log('You lose!');
        }
        buttons.forEach((button) => {
            button.removeEventListener('click', playGameOnClick);
        });

    }

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playGameOnClick);
});



