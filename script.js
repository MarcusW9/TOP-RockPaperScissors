const playerScoreDisplay = document.getElementById("your-score")
const computerScoreDisplay = document.getElementById("computer-score")

let userScore = 0;
let computerScore = 0;

// Make an ai answer 
const getComputerChoice = () => {
    let computerChoiceArray = ["Rock", "Paper", "Scissors"];
    const generateComputerChoice = computerChoiceArray[Math.floor(Math.random() * 3)];
    return generateComputerChoice
}


// get user answer
const getUserChoice = () => {
    let userChoiceRaw = window.prompt("Rock Paper Scissors Go!")
    return userChoiceRaw.charAt(0).toUpperCase() + userChoiceRaw.slice(1).toLowerCase();
}



// Play single round, take computerSelection and playerSelection
const calculateRound = (userChoice, computerChoice) => { 
    if (userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissors") {
        console.log("Invalid") 
    } else if (userChoice === computerChoice) {
        console.log(computerChoice)
        console.log("Draw")
    } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        console.log("R win S")
        userScore++
    } else if (userChoice === "Rock" && computerChoice === "Paper") {
        console.log("R lose P")
        computerScore++
    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        console.log("P win R")
        userScore++
    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        console.log("P lose S")
        computerScore++
    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        console.log("S win P")
        userScore++
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        console.log("S lose R")
        computerScore++
    }
}

console.log(calculateRound("Rock", "Rock"))


const playRound = () => {
    return calculateRound(getUserChoice(), getComputerChoice()) 
}

while (userScore < 5 && computerScore < 5) {
    playRound()
    playerScoreDisplay.innerText = userScore
    computerScoreDisplay.innerText = computerScore
}

// calculate winner if you win your score ++
// Output result
// increment the winner's score
// play this until a score = 5;