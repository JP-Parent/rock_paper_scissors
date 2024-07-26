function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max) + 1;

    if (choice === 1) {
        return "rock"
    }
    else if (choice === 2) {
        return "paper"
    }
    else return "scissors"
}

function getHumanChoice(id) {
    switch (id) {

        case "rock":
            return id;
        case "paper":
            return id;
        case "scissors":
            return id;
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        ++humanScore;
    }

    else {
        ++computerScore;
    }
}

function winGame(humanScore) {
    var winner = document.querySelector('#winner');

    humanScore == 5 ? winner.textContent = "Human wins" :
    winner.textContent = "Computer wins"
    disableButtons();
}

function reset(){
    winner.textContent = "Game will reset in 3 seconds";
    setTimeout(enableButtons, 3000);
    humanScore = 0;
    computerScore = 0;
    score.textContent = `Human score : ${humanScore} \nComputer score : ${computerScore}`;
}

function disableButtons(){
    for (const button of buttons){
        if(button.id !== "reset"){
            button.disabled = true;
        }
    }
}

function enableButtons(){
    for (const button of buttons){
        button.disabled = false;
    }
    winner.textContent = "";
}


var selection = document.querySelector('#selection');
var buttons = document.querySelectorAll("button");
var score = document.querySelector('#score');
var humanScore = 0;
var computerScore = 0;

selection.addEventListener("click", (event) => {
    let target = event.target;

    if(target.id == "reset") return reset();

    var humanChoice = getHumanChoice(target.id);
    var computerChoice = getComputerChoice(3);
    playRound(humanChoice, computerChoice);
    score.textContent = `Human score : ${humanScore} \nComputer score : ${computerScore}`;

    if(humanScore >= 5 || computerScore >= 5){
        winGame(humanScore)
        setTimeout(reset, 2000);
    }
});
