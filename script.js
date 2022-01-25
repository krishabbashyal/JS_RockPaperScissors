console.log("Welcome to Rock Paper Scissors");

let userWin = 0;
let computerWin = 0;

function computerPlay(){
    let selections = ["rock","paper","scissors"];
    return selections[Math.floor(Math.random() * selections.length)]
}

function userPlay(){
    let selections = prompt("Rock, Paper, or Scissors: ")
    return selections
}

let computerSelect = computerPlay()

let userSelect = userPlay()
userSelect = userSelect.toLowerCase();

function determineWinner(computerSelect, userSelect){
    if (computerSelect === userSelect){
        console.log("Tie, No one gained any points.")
    }

    else if (computerSelect === "rock" && userSelect === "paper"){
        userWin += 1;
        console.log("Paper beats Rock, User gained one point.")
    }
    else if (computerSelect === "rock" && userSelect === "scissors"){
        computerWin += 1;
        console.log("Rock beats Scissors, Computer gained one point.")
    }



    else if (computerSelect === "scissors" && userSelect === "paper"){
        computerWin += 1;
        console.log("Scissors beats Paper, Computer gained one point.")
    }
    else if (computerSelect === "scissors" && userSelect === "rock"){
        userWin += 1;
        console.log("Rock beats Scissors, User gained one point.")
    }


    else if (computerSelect === "paper" && userSelect === "rock"){
        computerWin += 1;
        console.log("Paper beats Rock, Computer gained one point.")
    }
    else if (computerSelect === "paper" && userSelect === "scissors"){
        userWin += 1;
        console.log("Scissors beats Paper, User gained one point.")
    }
}

console.log("Computer Picked " + computerSelect)
console.log("User Picked " + userSelect)

determineWinner(computerSelect, userSelect)
console.log("Computer: " + computerWin)
console.log("User: " + userWin)
console.log("")
