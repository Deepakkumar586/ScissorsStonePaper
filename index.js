let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})



// mrandom choice comapre to user choice -----play games
const playGame = (userChoice)=>{
    // console.log("User Choice",userChoice)

    // generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice",compChoice);

    if(userChoice=== compChoice){
        // draw game
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice ==='rock'){
            // scissor,paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            //rock scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)

    }
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        compScore--;
        compScorePara.innerText = compScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        userScore--;
        userScorePara.innerText = userScore;
        console.log("you lose");
        msg.innerText =  `You loss ${compChoice} beats  Y our ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}
const drawgame = ()=>{
    console.log("Game was Draw");
    msg.innerText  = "Game was draw!"
    msg.style.backgroundColor = "#081b31";

}


// Random Computer Choice 
const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    // rock paper ,scissor
   const randInx =  Math.floor(Math.random()*3);
   return options[randInx];
}

