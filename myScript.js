const x = "rock";
const y = "paper";
const z = "scissors";
let choiceArray = [x, y, z];

function getComputerChoice(choiceArray) {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

let input = prompt("Enter something").toLowerCase();

const playerSelection = input;
const computerSelection = getComputerChoice(choiceArray);
function playRound(playerSelection, computerSelection) {
    if (playerSelection !== x && playerSelection !== y && playerSelection !== z) {
        alert("Please enter a valid move");
    
   //used this fiirst but i thought it was too long then i found this new way of doing it seems neet and i like it
    
    /*if (!choiceArray.includes(playerSelection)) {
        console.log("Please enter a valid move");*/
    }else {
        if (playerSelection == computerSelection) {
            alert("draw")            
        } else if (playerSelection == x && computerSelection == z){
            alert("SCISSORS! , you won but i'm sure it's newbie luck")
        } else if (playerSelection == y && computerSelection == x) {
            alert("damn i underestimated you, you seem a lot more skilled than you look")
        } else if (playerSelection == z && computerSelection == y) {
            alert("I LOST! Impossible I'll DESTROY YOU NEXT")
        } else if (playerSelection == z && computerSelection == x) {
            alert("comeback another time newbie, maybe when you'are strong enough")
        } else if(playerSelection == x && computerSelection == y) {
            alert("You underestimated me, I'm a lot more skilled than I seem")
        } else if(playerSelection == y && computerSelection == z) {
            alert("YOU CAN NEVER DESTROY ME I'M INSTOPABLE!!! HAHAHHAHAHAH")
            
        } {
            
        }
    }
    
  }
  for (let round = 1; round <= 10; round++) {
    let input = prompt("Enter something").toLowerCase();
    const playerSelection = input;
    const computerSelection = getComputerChoice(choiceArray);
    playRound(playerSelection, computerSelection);
}
  //  playRound(playerSelection, computerSelection);
