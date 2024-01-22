game()
function game() {
    let counter = 0
    let compCounter = 0
    function playerWinCounter() {
        counter++
        console.log(counter)
    }
    function computerWinCounter() {
        compCounter++
        console.log(compCounter)
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

    rockBtn.addEventListener("click", () => {
        playGameRock()
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
}