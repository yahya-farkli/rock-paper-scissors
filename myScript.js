let player = 0;
let computer = 0;
let choiceArray = ["Rock", "Paper", "Scissors"];


let para = document.getElementById('para') ;


function getComputerChoice(choiceArray) {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice(choiceArray);
     
            if (playerSelection == computerSelection) {
                alert("draw")
                computer++ && player++
            }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
                alert("SCISSORS! , you won but i'm sure it's newbie luck") 
                player++
            } else if (playerSelection == "Paper" && computerSelection == "Rock") {
                alert("damn i underestimated you, you seem a lot more skilled than you look")
                player++ 
            } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
                alert("I LOST! Impossible I'll DESTROY YOU NEXT")
                player++ 
            } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
                alert("comeback another time newbie, maybe when you'are strong enough")
                computer++
            } else if(playerSelection == "Rock" && computerSelection == "Paper") {
                alert("You underestimated me, I'm a lot more skilled than I seem")
                computer++
            } else if(playerSelection == "Paper" && computerSelection == "Scissors") {
                alert("YOU CAN NEVER DESTROY ME I'M INSTOPABLE!!! HAHAHHAHAHAH")
                computer++
            }
    para.innerHTML = `Result: ${player} - ${computer}`;
    
    if (player === 5 && computer < 5 ) {
        player = 0;
        computer = 0;
        alert("I won't GIVE Up easily EVEN IF I lost .ANotheR RouND")
    }
    if (computer === 5 && player < 5) {
        player = 0;
        computer = 0;
        alert("noob such a pathetic weak human ROBOTS WILL TAKE OVER THE WORLD")
    }
 
}