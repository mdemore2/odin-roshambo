const choices = ['Rock', 'Paper', 'Scissors'];

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

function game(){
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


const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

game();