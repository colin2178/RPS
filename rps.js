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

let game = prompt("Choose your fate!");

function playRound(playerSelection, computerSelection) {
      
  if ((computerSelection == 'rock') && (playerSelection =='rock')) {
      return  'This is a tie! Rock vs Rock';
 } else if ((computerSelection == 'scissors') && (playerSelection == 'rock')) {
      return 'Player Wins! Rock beats Scissors';
 } else if ((computerSelection == 'paper') && (playerSelection == 'rock')) {
      return "You Lose! Paper beats Rock!"
 } else if ((computerSelection == 'rock') && (playerSelection == 'paper')) {
    return "Player Wins! Paper beats Rock!";
 } else if ((computerSelection == 'scissors') && (playerSelection == 'paper')) {
      return "You Lose! Scissors beats Paper!"
 }  else if ((computerSelection == 'paper') && (playerSelection == 'paper')) {
      return 'This is a tie! Paper vs Paper'
 } else if ((computerSelection == 'rock') && (playerSelection == 'scissors')) {
      return 'You Lose! Rock beats scissors!'
 } else if ((computerSelection == 'paper') && (playerSelection == 'scissors')) {
      return 'Player Wins! Scissors beats Paper!'
 }
      //  } if ((computerSelection == 'scissors') && (playerSelection == 'scissors')) {   
      // Note : don't need this code just go right to the answer
      
      return 'This is a tie! Scissors vs Scissors'
 }
// }
const playerSelection = game;
const computerSelection = getComputerChoice;

console.log(playRound(playerSelection, computerSelection));
// let game = parseFloat(prompt("Choose your fate!"))
// for (let i = 0; i < 5; i++) {
//       // your code here!
//    }


























