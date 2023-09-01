const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

console.log(getComputerChoice());