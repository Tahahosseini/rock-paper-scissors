// Step 1: write the logic to get the computer's choice

let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'

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

// Step 2: write the logic to get the player's choice

//create a function that gets the player's input and returns it

function getPlayerChoice() {
    let playerInput = prompt('Choose "Rock, Paper or scissors"')
    return playerInput.toLowerCase()
}


// create two variables with the value of 0
let humanScore = 0
let computerScore = 0


// Step 3: write the logic to play a single round
function playRound(playerChoice, computerChoice) {
    if ((playerChoice.toLowerCase() === paper && computerChoice === rock)
        || (playerChoice.toLowerCase() === rock && computerChoice === scissors)
        || (playerChoice.toLowerCase() === scissors && computerChoice === paper)) {
        console.log('good job! you won this round!')
        humanScore++
    }
    if ((playerChoice.toLowerCase() === paper && computerChoice === scissors)
        || (playerChoice.toLowerCase() === scissors && computerChoice === rock)
        || (playerChoice.toLowerCase() === rock && computerChoice === paper)) {
        console.log('you lost! try again.')
        computerScore++
    }
    if ((playerChoice.toLowerCase() === paper && computerChoice === paper)
        || (playerChoice.toLowerCase() === rock && computerChoice === rock)
        || (playerChoice.toLowerCase() === scissors && computerChoice === scissors)) {
        console.log('Same choice! draw!')
    }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

