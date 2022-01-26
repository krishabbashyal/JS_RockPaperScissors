function getUserSelect(userSelect){
    console.log("You Picked: " + userSelect);
    let userWin = 0;
    let computerWin = 0;

    while((userWin < 3) && (computerWin < 3) && (userSelect != null)){
        function computerPlay(){
            let selections = ["Rock","Paper","Scissors"];
            return selections[Math.floor(Math.random() * selections.length)];
        }

        let computerSelect = computerPlay();
        console.log("The Computer Picked: " + computerSelect);

        function determineWinner(computerSelect, userSelect){
            if (computerSelect === userSelect){
                console.log("Tie, No one gained any points.")
            }

            else if (computerSelect === "Rock" && userSelect === "Paper"){
                userWin += 1;
                console.log("Paper beats Rock, User gained one point.")
            }
            else if (computerSelect === "Rock" && userSelect === "Scissors"){
                computerWin += 1;
                console.log("Rock beats Scissors, Computer gained one point.")
            }



            else if (computerSelect === "Scissors" && userSelect === "Paper"){
                computerWin += 1;
                console.log("Scissors beats Paper, Computer gained one point.")
            }
            else if (computerSelect === "Scissors" && userSelect === "Rock"){
                userWin += 1;
                console.log("Rock beats Scissors, User gained one point.")
            }


            else if (computerSelect === "Paper" && userSelect === "Rock"){
                computerWin += 1;
                console.log("Paper beats Rock, Computer gained one point.")
            }
            else if (computerSelect === "Paper" && userSelect === "Scissors"){
                userWin += 1;
                console.log("Scissors beats Paper, User gained one point.")
            }
        }

        determineWinner(computerSelect, userSelect);
        userSelect = null;
    }
}

