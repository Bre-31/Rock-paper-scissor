let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper' , 'scissor']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {

        player += 1
        result = ('you win' +'<br>' + playerSelection + '<br>'+'beats' + '<br>'+ computerSelection + 
        "<br><br>Player Score:" + playerScore + '<br>computer Score:' + computerScore)


        if (playerScore == 5) {
            result += '<br><br>you won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It is a Tie. You both choose' + playerSelection
        + "<br><br>Player Score:" + playerScore + "<br>computer score" + computerScore)
    }
    else{
        computerScore += 1
        result = ('you lose!' +  computerSelection + 'beats' +  playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return

}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})