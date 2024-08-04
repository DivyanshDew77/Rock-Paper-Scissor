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
    Computer_Choice = Computer_Choice.toUpperCase();
    Human_Choice = Human_Choice.toUpperCase();
    console.log(`Computer's Choice is : ${Computer_Choice}`);

    if(Computer_Choice === Human_Choice)
    {
        let ComputerSecondChoice = getComputerChoice();
        while(ComputerSecondChoice === Human_Choice)
        {
             ComputerSecondChoice = getComputerChoice();
        }
         return playRound(ComputerSecondChoice, Human_Choice);
    }
    else if((Computer_Choice == option[0] && Human_Choice == option[1]) || (Computer_Choice == option[1] && Human_Choice == option[2]) || (Computer_Choice == option[2] && Human_Choice == option[0]) )
    {
        ++HumanScore;
        return console.log(" You Win ");
    }
    if((Computer_Choice !== option[0] && Human_Choice !== option[1]) || (Computer_Choice !== option[1] && Human_Choice !== option[2]) || (Computer_Choice !== option[2] && Human_Choice !== option[0]))
        {
            ++ComputerScore;
            return console.log("Better Luck Next Time");
        };
    
}



const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(`Your Response is : ${button.id}`);
        playRound(getComputerChoice(), button.id);
        console.log(`Your Score is : ${HumanScore}`);
        console.log(`Computer Score is : ${ComputerScore}`);
        if(HumanScore == 5)
            {
                console.log(`Congratulations you won the Game`)
                HumanScore = 0;
                ComputerScore = 0;
            }
            if(ComputerScore == 5){
                console.log("The Computer Wins");
                ComputerScore = 0;
                HumanScore = 0;
            }
    });
    
});
