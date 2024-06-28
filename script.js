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