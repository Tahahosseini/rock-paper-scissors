// Step 1: the computer's choice

//create a function which randomly returns one of the options

let rock = 'Rock'
let paper = 'Paper'
let scissors = 'Scissors'

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.3333333333) {
        return rock
    }
    else if (choice <= 0.6666666666) {
        return paper
    }
    else return scissors
}

// Step 2: the player's choice

//create a function that gets the player's input and returns it

function getPlayerChoice() {
    let playerInput = prompt('Choose "Rock, Paper or scissors"')

    if (playerInput == rock || playerInput == paper || playerInput == scissors) {
        return playerInput
    }
    else if (playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors') {
        return playerInput
    }
    else return 'Unknown input'
}


// create two variables with the value of 0
let humanScore = 0
let computerScore = 0


// Step 3: the play round function
function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === paper && computerChoice === rock) {
        console.log('Paper beats rock! you won this round!')
        humanScore++
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);