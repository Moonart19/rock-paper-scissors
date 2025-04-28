const MAX = 5;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  
  if (randomNumber <= 33) {
    return "rock";
  } else if(randomNumber > 33 && randomNumber <= 66) {
    return "paper";
  } else if(randomNumber > 66)  {
    return "scissors";
  }

}

let humanScore = 0;
let computerScore = 0;


const display = document.createElement("div");
document.body.appendChild(display);

const result = document.createElement("p");
result.setAttribute("class", "showResult");
result.textContent = "Let's play";
display.appendChild(result);

const scores = document.createElement("p");
scores.setAttribute("class","showScores");
scores.textContent = "Your Score will be displayed here";
display.appendChild(scores);

const restart = document.createElement("button");
restart.textContent = "Restart";
restart.setAttribute("class", "restart-btn");
display.appendChild(restart);
restart.style.display = "none";

function playGame() {

function playRound(humanChoice, computerChoice) {
  
  if(humanScore > MAX || computerScore > MAX) return;
  
    if(humanChoice === computerChoice){
        result.textContent = "It's tie";
      } else if (
        (computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors")||
        (computerChoice === "scissors" && humanChoice === "rock")
      ) {
        humanScore++;
        result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
      } else {
        computerScore++;
        result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
      }

      scores.textContent = `You Scored: ${humanScore}, computer Scored: ${computerScore}`;
      
      if(humanScore === MAX || computerScore === MAX) {
        if(humanScore === computerScore) {
          result.textContent = "It's TIE";
          scores.textContent = `You scored: ${humanScore}, Computer scored: ${computerScore}`;
        } else if (humanScore > computerScore) {
          result.textContent = "You WON!";
          scores.textContent = `You scored: ${humanScore} Computer scored: ${computerScore}`;
        } else {
          result.textContent = "You LOST!";
          scores.textContent = `You scored: ${humanScore} Computer scored: ${computerScore}`;
        }

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        restart.style.display = "block";
      }
}


      const rockBtn = document.querySelector("#rock");
      const paperBtn = document.querySelector("#paper");
      const scissorsBtn = document.querySelector("#scissors");

      rockBtn.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
      });
      paperBtn.addEventListener('click', () => {
        playRound("paper", getComputerChoice());
      });
      scissorsBtn.addEventListener('click', () => {  
        playRound("scissors", getComputerChoice());
      });


      restart.addEventListener('click', () => {
        humanScore = 0, computerScore = 0;
        result.textContent = "Let's play Again";
        scores.textContent = `You Scored: ${humanScore}, computer Scored: ${computerScore}`;

        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;

        restart.style.display = "none";
      });
}
  

playGame();