# project_rock_paper_scissors

Understand:  
This game is going to be played completely from the console.
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"  
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). Finally make a function that will play 5 rounds and keeps score and reports a winner or loser at the end.

PLAN:
This game will be a browser console program.
The user will enter rock, paper or scissors from a prompt. 
The desired output is for a winner between the user and the computer to be decided by a function that will output "You Lose! Paper beats Rock" or "You Win! Rock beats scissors" 
make a function that will play 5 rounds. 

DIVIDE & CONQUER:
The first subproblem we can solve is getting input from the user. 
let playerChoice = prompt('Choose rock, paper or scissors', '').toLowerCase();

Second subproblem is the computers choice we can get in from a function. function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)] 
}

Third subproblem Write a function that plays a single round of Rock Paper Scissors. 

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

Fourth subproblem Write a function that takes the previous function and plays 5 round of Rock Paper Scissors. 

We will use a for loop for this one

function game() {
    for(let i = 0; i <= 5; i++) {
        playGame(playerSelection, computerChoice());
    }
}
