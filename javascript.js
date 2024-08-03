let option = ["ROCK", "PAPER", "SCISSOR"];
function  getComputerChoice() {
    let ans = Math.floor((Math.random())*3);

    return option[ans];
}
let Computer_Choice = getComputerChoice();

function getHumanChoice() {

    let bns = prompt("Enter your choice");
    console.log(`User Choice: ${bns}`);
    let cns = bns.toUpperCase();
    return cns;
}

let HumanScore = 0, ComputerScore = 0;
function playRound(Computer_Choice, Human_Choice) {
    
    
    if(option.indexOf(Computer_Choice) == option.indexOf(Human_Choice))
    {
        let Second_Choice = getComputerChoice();
        console.log(`Computer choice: ${Second_Choice}`)
        return playRound(Second_Choice, Human_Choice);
    }
    
    if((Computer_Choice == "ROCK" && Human_Choice == "SCISSOR") || (Computer_Choice == "PAPER" && Human_Choice == "ROCK") || (Computer_Choice == "SCISSOR" && Human_Choice == "PAPER"))
    {
        ComputerScore++;
        console.log(`Computer choice: ${Computer_Choice}`)
        return console.log("You lose!! Better luck next time");
    }
   
    else {
        HumanScore++;
        console.log(`Computer choice: ${Computer_Choice}`)
    }
    return console.log("You win");
}

function playGame() {
    for(let i = 0; i<5; i++)
    {
        let c_choice = getComputerChoice();
        let u_choice = getHumanChoice();
        playRound(c_choice, u_choice);
        console.log(`ComputerScore: ${ComputerScore}`);
        console.log(`YourScore: ${HumanScore}`);
        
    }
    if(HumanScore > ComputerScore)
    {
        console.log(`Congratulations! You won`);
    }
    else {
        console.log(`Try Harder Next Time`);
    }
}
playGame();