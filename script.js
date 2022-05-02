let playerChoice = prompt('Choose rock, paper or scissors', '').toLowerCase();

let computerChoice = function() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
};

function playGame(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('It\'s a draw boo play again');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose paper beats rock');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win rock beats scissors ');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win paper beats rock');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('It\'s a draw boo play again');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose scissors beats paper');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose rock beats scissors');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win scissors beats paper');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('It\'s a draw boo play again');
    }
}

playGame(playerChoice, computerChoice());