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
                return ("Tie, No one gained any points.")
            }

            else if (computerSelect === "Rock" && userSelect === "Paper"){
                let itemScore = document.getElementById("userScore");
                let scoreNum = itemScore.innerHTML;
                scoreNum++;
                userScore.innerHTML = scoreNum;
                return ("Paper beats Rock, The user has gained one point.")
            }
            else if (computerSelect === "Rock" && userSelect === "Scissors"){
                let itemScore = document.getElementById("cpuScore");
                let scoreNum = itemScore.innerHTML;
                scoreNum++;
                cpuScore.innerHTML = scoreNum;

                return ("Rock beats Scissors, The computer has gained one point.")
            }

            else if (computerSelect === "Scissors" && userSelect === "Paper"){
                let itemScore = document.getElementById("cpuScore");
                let scoreNum = itemScore.innerHTML;
                scoreNum++;
                cpuScore.innerHTML = scoreNum;
                return ("Scissors beats Paper, The computer has gained one point.")
            }
            else if (computerSelect === "Scissors" && userSelect === "Rock"){
                let itemScore = document.getElementById("userScore");
                let scoreNum = itemScore.innerHTML;
                scoreNum++;
                userScore.innerHTML = scoreNum;
                return ("Rock beats Scissors, The user has gained one point.")
            }


            else if (computerSelect === "Paper" && userSelect === "Rock"){
                let itemScore = document.getElementById("cpuScore");
                let scoreNum = itemScore.innerHTML;
                scoreNum++;
                cpuScore.innerHTML = scoreNum;
                return ("Paper beats Rock, The computer has gained one point.")
            }
            else if (computerSelect === "Paper" && userSelect === "Scissors"){
                let itemScore = document.getElementById("userScore");
                let scoreNum = itemScore.innerHTML;
                scoreNum++;
                userScore.innerHTML = scoreNum;
                return ("Scissors beats Paper, The user has gained one point.");
            }
        }

        let playAreaText = determineWinner(computerSelect, userSelect);
        document.getElementById("playAreaText").innerHTML = playAreaText;


        userSelect = null; // Stops the a continious loop from happening by clearing the userSelect variable
                           // Allows the user to press another button and go through the program again, rather then just
                           // Using the first button that was clicked, but having another CPU selection.
       
        let grabUser = document.getElementById("userScore");
        let grabCPU = document.getElementById("cpuScore");
        let userScoreCheck = grabUser.innerHTML;
        let cpuScoreCheck = grabCPU.innerHTML;
        if((cpuScoreCheck == 3)||(userScoreCheck == 3)){
            document.getElementById("rockButton").disabled = true; 
            document.getElementById("paperButton").disabled = true; 
            document.getElementById("scissorsButton").disabled = true; 
            if(cpuScoreCheck == 3){
                document.getElementById("gameOver").innerHTML = "Game Over!";
                document.getElementById("computerWon").innerHTML = "Better luck next time, the Computer has won.";
            }
            else{
                document.getElementById("gameOver").innerHTML = "Game Over!";
                document.getElementById("userWon").innerHTML = "You win! You have defeated the Computer.";
            }
        }

    }
}

