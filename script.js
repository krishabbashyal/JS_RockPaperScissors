console.log("Welcome to Rock Paper Scissors, click the button to start the game");

function playGame(){
    let userWin = 0;
    let computerWin = 0;
    while((userWin < 3) && (computerWin < 3)){
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

        console.log("\nComputer Picked: " + computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1));
        console.log("User Picked: " + userSelect.charAt(0).toUpperCase() + userSelect.slice(1));

        determineWinner(computerSelect, userSelect)
        console.log("Computer: " + computerWin)
        console.log("User: " + userWin)
        console.log("\n")
    }

    function checkWinner(computerWin, userWin){
        if (computerWin > userWin){
            return "\nThe computer has won the game, click the start button to play again"
        }
        else{
            return "\nThe user has won the game, click the start button to play again"
        }
    }

    console.log(checkWinner(computerWin, userWin));
}
