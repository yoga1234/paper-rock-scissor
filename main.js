// function for computer
function computerPlay(){
  let compSelection = ["paper", "rock", "scissor"]
  // randoming the array return
  let result = compSelection[Math.floor(Math.random() * 3)]
  return result
}

// function for playing the game
function playRound(playerSelection, computerSelection) {
  console.log(computerSelection)
  if(playerSelection == computerSelection) {
    console.log("draw")
  } else if(playerSelection == "scissor" && computerSelection == "paper") {
    console.log("Player win!")
  } else if(playerSelection == "scissor" && computerSelection == "rock") {
    console.log("Computer win!")
  } else if(playerSelection == "rock" && computerSelection == "scissor") {
    console.log("player win!")
  } else if(playerSelection == "rock" && computerSelection == "paper") {
    console.log("Computer win!")
  } else if(playerSelection == "paper" && computerSelection == "scissor") {
    console.log("Computer win!")
  } else if(playerSelection == "paper" && computerSelection == "rock") {
    console.log("player win!")
  }
  
}

// const inputSelection = prompt("Enter your selection")
// let playerSelection = inputSelection.toLowerCase()
const computerSelection = computerPlay()
// playRound(playerSelection, computerSelection)

// event for start the game
let startButton = document.getElementById("start-button")
startButton.addEventListener("click", function() {
  console.log("You pressing start button")
})