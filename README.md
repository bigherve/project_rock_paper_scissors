# project_rock_paper_scissors

Understand:  
This game is going to be played completely from the console.
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"  
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

PLAN:
This game will be a browser console program.
The user will enter rock, paper or scissors from a prompt. 
The desired output is for a winner between the user and the computer to be decided by a function that will output "You Lose! Paper beats Rock" or "You Win! Rock beats scissors" 

DIVIDE & CONQUER:
The first subproblem we can solve is getting input from the user. 
let playerChoice = prompt('Chose rock, paper or scissors', '');

Second subproblem is the computers choice we can get in from a function. function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)] 
}

Third subproblem Write a function that plays a single round of Rock Paper Scissors. function playGame(playerSelection, computerSelection) {
    if (playerSelection === /scissors/i && computerSelection === /rock/i) {
        console.log('You lose rock beats paper');
    }
}
