game()
function game() {
    let counter = 0
    let compCounter = 0
    function playerWinCounter() {
        counter++
        console.log(counter)
        uScore.textContent = counter
        if (counter === 3) {
            alert("You win game!");
            counter -= counter;
            compCounter -= compCounter;
        }
    }
    function computerWinCounter() {
        compCounter++
        console.log(compCounter)
        cScore.textContent = compCounter
        if (compCounter === 3) {
            alert("You lose game!");
            counter -= counter;
            compCounter -= compCounter;
        }
    
    }
    //for (playerWin = 0; playerWin < 5; playerWin++) {
        //playGame()
        /* if (counter === 3) {
            alert("You win game!");
            game();
        } else if (compCounter === 3) {
            alert("You lose game!");
            game();
        }
    } */


    const rockBtn = document.querySelector(".rock");
    const paperBtn =  document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors")

    let cScore = document.querySelector(".computer-score");
    let uScore = document.querySelector(".user-score")

    rockBtn.addEventListener("click", () => {
        playGameRock()
    })

    paperBtn.addEventListener("click", () => {
        playGamePaper()
    })

    scissorsBtn.addEventListener("click", () => {
        playGameScissors()
    })

    function getComputerChoice(max) {
        let computerChoice = Math.floor(Math.random() * max)
        return computerChoice
    }
    function playGameRock() {
        let computerChoice = getComputerChoice(3)
        console.log(computerChoice)
        //let userChoice = prompt("Rock, paper, or scissors?").toLowerCase();

        //if (userChoice === "rock") { 
            if (computerChoice === 2) {
                alert("You win!");
                playerWinCounter()
            } else if (computerChoice === 1) {
                alert("You lose!");
                computerWinCounter()
            } else { alert("Tie");
                    //playerWin-- ;
                }
        /* } else if (userChoice === "paper") {
            if (computerChoice === 2) {
                alert("You lose!");
                computerWinCounter()
            } else if (computerChoice === 1) {
                alert("Tie");
                playerWin--;
            } else {alert("You win!");
                playerWinCounter()}
        } else if (userChoice === 'scissors') {
            if (computerChoice === 2) {
                alert("Tie")
                playerWin--;
            } else if (computerChoice === 1) {
                alert("You win!");
                playerWinCounter()
            } else { alert("You lose!");
                computerWinCounter() }
        } else {alert ("Invalid choice");
                playerWin--;}
        console.log(userChoice) */
    } 
    function playGamePaper() {
        let computerChoice = getComputerChoice(3)
        console.log(computerChoice)
        if (computerChoice === 2) {
            alert("You lose!");
            computerWinCounter()
        } else if (computerChoice === 1) {
            alert("Tie");
            //playerWin--;
        } else {alert("You win!");
            playerWinCounter()}
    }
    function playGameScissors() {
        let computerChoice = getComputerChoice(3)
        console.log(computerChoice)
        if (computerChoice === 2) {
            alert("Tie")
           // playerWin--;
        } else if (computerChoice === 1) {
            alert("You win!");
            playerWinCounter()
        } else { alert("You lose!");
            computerWinCounter() }
    }
}