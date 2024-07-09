// define rock paper and scissors
let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'

// get the computer's choice
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


// the scores before the game starts
let humanScore = 0
let computerScore = 0


// write the logic to play a single round
function playRound(playerChoice, computerChoice) {

    // winning round
    if ((playerChoice === paper && computerChoice === rock)
        || (playerChoice === rock && computerChoice === scissors)
        || (playerChoice === scissors && computerChoice === paper)) {
        ++humanScore

        let choice = document.querySelector(".choice")
        choice.textContent = `I choose ${computerChoice}, Good job! You won this round!`

        let score = document.querySelector(".scores")
        score.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore}`


    }

    // losing round
    if ((playerChoice === paper && computerChoice === scissors)
        || (playerChoice === scissors && computerChoice === rock)
        || (playerChoice === rock && computerChoice === paper)) {
        computerScore++

        let choice = document.querySelector(".choice")
        choice.textContent = `I choose ${computerChoice}, You lost! try again.`

        let score = document.querySelector(".scores")
        score.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore}`
    }

    // draw round
    if ((playerChoice === paper && computerChoice === paper)
        || (playerChoice === rock && computerChoice === rock)
        || (playerChoice === scissors && computerChoice === scissors)) {

        let choice = document.querySelector(".choice")
        choice.textContent = `I choose ${computerChoice}, Same choice! draw!`

        let score = document.querySelector(".scores")
        score.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore}`
    }
}

// select the buttons in the DOM
const btn = document.querySelectorAll(".selection")
const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")


// get a winner announcement
function announceWinner(player, computer) {
    if (player > computer) {
        return "Congrats! you won the whole game!"
    }
    if (player === computer) {
        return "We are evenly matched!"
    }
    if (player < computer) {
        return "Unlucky! you lost this game! maybe try again?"
    }
}


// go through each button and add a click listener to it
btn.forEach((btn) => {

    btn.addEventListener("click", (e) => {

        // take what the player clicks
        // and give it to the playRound function as the the player's choice
        switch (e.target) {
            case btnRock:
                playRound(rock, getComputerChoice())
                break;

            case btnPaper:
                playRound(paper, getComputerChoice())
                break;

            case btnScissors:
                playRound(scissors, getComputerChoice())
                break;
        }

        // if human score or computer score reaches or exceeds 5
        // announce a winner
        if (humanScore >= 5 || computerScore >= 5) {
            let winner = document.querySelector(".winner")
            winner.textContent = announceWinner(humanScore, computerScore)
        }


    })
})



// NOTE TO SELF
// the hardest part of this project for me was the winner announcement after 5 rounds.
// I tried everything but it didn't work. until I wrote how the program worked step by step in plain english for myself.
// The problem was that the text which announced the winner was stuck at the draw text: "We are evenly matched!".
// I realized the function which returns the results string works fine and is updated each time the player clicks a button, and only the text stays the same.
// I realized that the text that announced the winner, only gets the information from the function at the start.
// so I figured that I want the text to get new information from the function every time the player clicks a button so the text is relevant to the scores.
// so I just moved the code that invoked the announceWinner function inside the eventlistener that i already had, so it would run every time a player clicks a button.
// and I put it inside an if statement which checked for the scores.