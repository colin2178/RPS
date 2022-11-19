    //Going to be played against comp

       // Tip: use the console to make sure this is returning 
      // the expected output before moving to the next step!

// let input = prompt("Choose your fate!")

      // Begin with a function called getComputerChoice that will 
      // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let nut = ['rock', 'paper', 'scissors'];

 
//  let playerSelection = nut[Math.floor(Math.random()*nut.length)];
//    console.log('The Computer choose:' + playerSelection); 

let getComputerChoice = nut[Math.floor(Math.random()*nut.length)];

      // Write a function that plays a single round of Rock Paper Scissors.
      // The function should take two parameters - the "playerSelection" and 
      // "computerSelection" - and then return a string that declares the winner 
      // of the round like so: "You Lose! Paper beats Rock"

let input = prompt("Choose your fate!");

function playRound(playerSelection, computerSelection) {
      
  if ((computerSelection == 'rock') && (playerSelection =='rock')) {
         return 'Tie'
      // return  'This is a tie! Rock vs Rock!';
 } else if ((computerSelection == 'scissors') && (playerSelection == 'rock')) {
         return 'playerSelection'
      // return 'Player Wins! Rock beats Scissors!';
 } else if ((computerSelection == 'paper') && (playerSelection == 'rock')) {
         return 'computerSelection'
      // return "You Lose! Paper beats Rock!"
 } else if ((computerSelection == 'rock') && (playerSelection == 'paper')) {
         return 'playerSelection'
//       return "Player Wins! Paper beats Rock!";
 } else if ((computerSelection == 'scissors') && (playerSelection == 'paper')) {
         return 'computerSelection'
      // return "You Lose! Scissors beats Paper!"
 }  else if ((computerSelection == 'paper') && (playerSelection == 'paper')) {
         return 'Tie'
      // return 'This is a tie! Paper vs Paper!'
 } else if ((computerSelection == 'rock') && (playerSelection == 'scissors')) {
         return 'computerSelection'
      // return 'You Lose! Rock beats scissors!'
 } else if ((computerSelection == 'paper') && (playerSelection == 'scissors')) {
         return 'playerSelection'
      // return 'Player Wins! Scissors beats Paper!'
 }       return 'Tie'
      // return 'This is a tie! Scissors vs Scissors!'
 }

const playerSelection = input;
const computerSelection = getComputerChoice;
let game = playRound(playerSelection, computerSelection);

// console.log(playRound(playerSelection, computerSelection));
// console.log(game);

for (let i = 0; i < 5 ; i++) {
     if ('Tie' <= 3) {
      console.log("It's a Tie! Would you like to play again?");
     } else if ('playerSelection' <= 3) {
      console.log("Player wins! Would you like to play again?");
     } 
      console.log("Computer Wins! Would you like to play again?");
     
}   

























