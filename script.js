function getComputerChoice() {
  /*
  1.generate random numbers till 100--
  2.IF number is less than  33 return rock
  3.IF number is greater 33 and less than 66 return paper
  4.IF number is greater than 66 then return scissors
  5.done
  */
 const randomNumber = Math.floor(Math.random() * 100) + 1;
 
 if (randomNumber <= 33) {
  return "rock";
 } else if(randomNumber > 33 && randomNumber <= 66) {
  return "paper";
 } else if(randomNumber > 66)  {
  return "scissors";
 }

}

// console.log(getComputerChoice());

function getHumanChoice() {
  /*
  1.get user input
  2.return it
  3.done
  */
 const userChoice = prompt("Enter your choice: ").toLowerCase();
 return userChoice; 
}

// console.log(getHumanChoice());

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();


// console.log(playRound(humanChoice, computerChoice));

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice){
        return "It's tie";
      } else if (
        (computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors")||
        (computerChoice === "scissors" && humanChoice === "rock")
      ) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
      } else {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
      }
  }
  
  for(let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if(
      humanChoice !== "rock" &&
      humanChoice !== "paper" &&
      humanChoice !== "scissors"
     ) {
        alert("You entered invalid choice: refresh for new game");
        return;
    } else {
      let result = playRound(humanChoice,computerChoice)
      console.log(result);
    }
  }

  if(humanScore === computerScore) {
    console.log("************* Final result: TIE **************");
  } else if (humanScore > computerScore) {
    console.log("************* Final result: Winner is HUMAN(YOU) **************");
  } else {
    console.log("************* Final result: Winner is COMPUTER **************");
  }
}

playGame();




