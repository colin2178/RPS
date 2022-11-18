    //Going to be played against comp

       // Tip: use the console to make sure this is returning 
      // the expected output before moving to the next step!
let input = prompt("Choose your fate!")
      // Begin with a function called getComputerChoice that will 
      // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let nut = ['Rock', 'Paper', 'Scissors'];

 
//  let playerSelection = nut[Math.floor(Math.random()*nut.length)];
//    console.log('The Computer choose:' + playerSelection); 
let getComputerChoice = nut[Math.floor(Math.random()*nut.length)];
      // Write a function that plays a single round of Rock Paper Scissors.
      // The function should take two parameters - the "playerSelection" and 
      // "computerSelection" - and then return a string that declares the winner 
      // of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    if (computerSelection = 'Paper') 
    result = "You Lose! Paper beats Rock!";  
    return result;
}
  
  

const playerSelection = "Rock";
const computerSelection = getComputerChoice;
console.log(playRound(playerSelection, computerSelection));




























