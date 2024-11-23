let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
     const options = ["rock", "paper", "scissors"];

    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again/";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true)
    {
        // console.log("you win");
        userScore++;
        userScorePara.innerText = userScore; 
        msg.innerText = `You win! Your ${userChoice} beates ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        // console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;   
        msg.innerText = `You lost! Your ${compChoice} beates ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    // generate Computer choice 
    const compChoice = genCompChoice();
    console.log("Comp choice", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;  
        }
        else if(userChoice === "paper")
        {
            // rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else // (userChoice === "scissors")
        {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("c clicked", UserChoice);
        playGame(userChoice);

    });
})

