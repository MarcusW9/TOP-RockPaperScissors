const userScoreDisplay = document.getElementById("your-score")
const computerScoreDisplay = document.getElementById("computer-score")
const resultDisplay = document.querySelector("#result-display")
const winnerDisplay = document.querySelector("#winner-display")
const rockBtn = document.querySelector("#rock-btn")
const paperBtn = document.querySelector("#paper-btn")
const scissorsBtn = document.querySelector("#scissors-btn")

let userScore = 0;
let computerScore = 0;
let result = ""

// Make an ai answer 
const getComputerChoice = () => {
    let computerChoiceArray = ["Rock", "Paper", "Scissors"];
    const generateComputerChoice = computerChoiceArray[Math.floor(Math.random() * 3)];
    return generateComputerChoice
}

// Play single round, take computerSelection and playerSelection
const calculateRound = (userChoice, computerChoice) => { 
    if (userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissors") {
        result = "Invalid";
    } else if (userChoice === computerChoice) {
        result = "Draw";
    } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        result = "R win S";
        userScore++
    } else if (userChoice === "Rock" && computerChoice === "Paper") {
        result = "R lose P";
        computerScore++
    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        result = "P win R";
        userScore++
    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        result = "P lose S";
        computerScore++
    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        result = "S win P";
        userScore++
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        result = "S lose R";
        computerScore++
    }
}

const playRound = (userSelection) => {
    calculateRound(userSelection, getComputerChoice()) 
    userScoreDisplay.innerText = `Your Score: ${userScore}`
    computerScoreDisplay.innerText =  `Computer Score: ${computerScore}`
    resultDisplay.innerText = result
    announceWinner()
}

// get user answer to compare against ai answer
rockBtn.addEventListener("click", () => playRound("Rock"))
paperBtn.addEventListener("click", () => playRound("Paper"))
scissorsBtn.addEventListener("click", () => playRound("Scissors"))

const announceWinner = () => {
    if (userScore >= 5) {
        winnerDisplay.textContent = "You Win!"
    } else if (computerScore >= 5) {
        winnerDisplay.textContent = "You Lose!"
    }
}

// calculate winner if you win your score ++
// Output result
// increment the winner's score
// play this until a score = 5;