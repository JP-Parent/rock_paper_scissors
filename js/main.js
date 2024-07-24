function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max)+1;

    if (choice === 1) {
        return "rock"
    }
    else if (choice === 2) {
        return "paper"
    }
    else return "scissors"
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors")
    
    if (choice === null || choice === "") {
        return;
    }

    choice = choice.toLowerCase()
    switch (choice) {

        case "rock":
            return choice
        case "paper":
            return choice
        case "scissors":
            return choice
        default: window.alert("Please choose between the 3 options available : Rock, Paper, Scissors")
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a draw")
        }

        else if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            ||humanChoice === "scissors" && computerChoice === "paper"
        ) {
            ++humanScore;
            console.log("Human wins")
        }

        else {
            ++computerScore;
            console.log("Computer wins")
 
        }            
    }
    
    playRound(getHumanChoice(), getComputerChoice(3));
    playRound(getHumanChoice(), getComputerChoice(3));
    playRound(getHumanChoice(), getComputerChoice(3));
    playRound(getHumanChoice(), getComputerChoice(3));

    console.log(`Human score : ${humanScore}`);
    console.log(`Computer score : ${computerScore}`);
}

playGame()