let playerChoice
let playerScore = 0;
let pcScore = 0;
let computerChoice = function() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
};

function playGame(playerSelection, computerSelection) {
    playerChoice = prompt('Choose rock, paper or scissors', '').toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('It\'s a draw boo');
        pcScore + 0;
        playerChoice + 0;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose paper beats rock');
        pcScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win rock beats scissors ');
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win paper beats rock');
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('It\'s a draw boo');
        pcScore + 0;
        playerChoice + 0;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose scissors beats paper');
        pcScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose rock beats scissors');
        pcScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win scissors beats paper');
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('It\'s a draw boo');
        pcScore + 0;
        playerChoice + 0;
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        playGame(playerChoice, computerChoice());
    }
    if (playerScore > pcScore) {
        console.log(`You win my G (${playerScore} - ${pcScore})`);
    } else if (playerScore < pcScore) {
        console.log(`You lose my G (${pcScore} - ${playerScore})`);
    } else {
        console.log(`Its a draw my G play again (${pcScore} - ${playerScore})`);
    }
}

game();