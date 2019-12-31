// score
let playerScore = 0
let computerScore = 0

//rendering the score to page
function renderScore(){
  document.getElementById('playerScore').innerHTML = playerScore
  document.getElementById('computerScore').innerHTML = computerScore
  endGame()
}

// if the score reach 5
function endGame() {
  if( playerScore == 5 ) {
    console.log("Player win")
    document.getElementById('play-interface').style.display = "none"
    document.getElementById('gameFinish').style.display = "block"
    document.getElementById('nameWinner').innerHTML = "player win!"
  }
  if( computerScore == 5 ){
    console.log("computer win")
    document.getElementById('play-interface').style.display = "none"
    document.getElementById('gameFinish').style.display = "block"
    document.getElementById('nameWinner').innerHTML = "computer win!"
  }
}

// function for computer
function computerPlay(){
  let compSelection = ["paper", "rock", "scissors"]
  // randoming the array return
  let result = compSelection[Math.floor(Math.random() * 3)]
  document.getElementById("computerSign").classList = ""
  document.getElementById("computerSign").classList.add("fa", `fa-hand-${result}-o`, "sign-size")
  return result
}

// function for playing the game
function playRound(playerSelection, computerSelection) {
  console.log("Computer Choose " + computerSelection)
  switch (playerSelection) {
    case "rock":
      if(computerSelection == "rock") {        
        document.getElementById('score-result').innerHTML = "draw"
      }
      if(computerSelection == "paper") {
        document.getElementById('score-result').innerHTML = "lose"
        computerScore++
        renderScore()
      }
      if(computerSelection == "scissors") {
        document.getElementById('score-result').innerHTML = "win"
        playerScore++
        renderScore()
      }
      break;
    case "paper":
      if(computerSelection == "rock") {
        document.getElementById('score-result').innerHTML = "win"
        playerScore++
        renderScore()
      }
      if(computerSelection == "paper") {
        document.getElementById('score-result').innerHTML = "draw"
        renderScore()
      }
      if(computerSelection == "scissors") {
        document.getElementById('score-result').innerHTML = "lose"
        computerScore++
        renderScore()
      }
      break;
    case "scissors":
      if(computerSelection == "rock") {
        document.getElementById('score-result').innerHTML = "lose"
        computerScore++
        renderScore()
      }
      if(computerSelection == "paper") {
        document.getElementById('score-result').innerHTML = "win"
        playerScore++
        renderScore()
      }
      if(computerSelection == "scissors") {
        document.getElementById('score-result').innerHTML = "draw"
        renderScore()
      }
      break;
  }
  
}

// event for start the game
let startButton = document.getElementById("start-button")
startButton.addEventListener("click", function(e) {
  document.getElementById("start-interface").style.display = "none"
  document.getElementById("play-interface").style.display = "block"
  renderScore()
})

// event for play the game
let handSign = document.querySelector('#hand-sign')
handSign.addEventListener('click', function(e) {
  let choosenSign = document.getElementById("choosenSign")
  if(e.target.classList.contains('fa-hand-paper-o')) {
    console.log("you are choosing paper")
    choosenSign.innerHTML = "paper"
    playRound("paper", computerPlay())
  } else if(e.target.classList.contains('fa-hand-rock-o')) {
    console.log("you are choosing rock")
    choosenSign.innerHTML = "rock"
    playRound("rock", computerPlay())
  } else if(e.target.classList.contains('fa-hand-scissors-o')){
    console.log("you are choosing scissorss")
    choosenSign.innerHTML = "scissors"
    playRound("scissors", computerPlay())
  }
})

// event for restart button
let resButt = document.getElementById('restartButton')
resButt.addEventListener('click', function () {
  window.location.reload()
})