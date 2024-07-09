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

    // winning round
    if ((playerChoice.toLowerCase() === paper && computerChoice === rock)
        || (playerChoice.toLowerCase() === rock && computerChoice === scissors)
        || (playerChoice.toLowerCase() === scissors && computerChoice === paper)) {
        console.log('I choose ' + computerChoice)
        console.log('good job! you won this round!')
        humanScore++
    }
    // losing round
    if ((playerChoice.toLowerCase() === paper && computerChoice === scissors)
        || (playerChoice.toLowerCase() === scissors && computerChoice === rock)
        || (playerChoice.toLowerCase() === rock && computerChoice === paper)) {
        console.log('I choose ' + computerChoice)
        console.log('you lost! try again.')
        computerScore++
    }
    // draw round
    if ((playerChoice.toLowerCase() === paper && computerChoice === paper)
        || (playerChoice.toLowerCase() === rock && computerChoice === rock)
        || (playerChoice.toLowerCase() === scissors && computerChoice === scissors)) {
        console.log('I choose ' + computerChoice + ' too!')
        console.log('Same choice! draw!')
    }

}


// score keeping
if (humanScore > computerScore) {
    console.log('Congrats! you won the whole game! ' + 'Your Score: ' + humanScore + ' My Score: ' + computerScore)
} else if (humanScore === computerScore) {
    console.log('We are evenly matched! ' + 'Your Score: ' + humanScore + ' My Score: ' + computerScore)
}
else console.log('Unlucky! you lost this game! maybe try again? ' + 'Your Score: ' + humanScore + ' My Score: ' + computerScore)


const btn = document.querySelectorAll(".selection")
let btnRock = document.querySelector(".rock")
let btnPaper = document.querySelector(".paper")
let btnScissors = document.querySelector(".scissors")


btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target === btnRock) {
            playRound(rock, getComputerChoice())
        }
        if (e.target === btnPaper) {
            playRound(paper, getComputerChoice())
        }
        if (e.target === btnScissors) {
            playRound(scissors, getComputerChoice())
        }
    })
})