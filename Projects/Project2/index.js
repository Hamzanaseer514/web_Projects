let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll(".choice");
const message = document.querySelector("#move");
const us = document.querySelector("#user-score")
const cs = document.querySelector("#comp-score")

const generatecomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const number = Math.floor(Math.random() * 3);
    return options[number]
}

const drawgame = () => {
    message.innerText = "Match is draw, Play Again!";
    message.style.backgroundColor = "#081b31";
}

const showwinner = (userwinner,userchoice,comchoice) =>{
    if(userwinner){
        message.innerText = `You Win! Your ${userchoice} beats ${comchoice}`;
        message.style.backgroundColor = "green";
        userscore++;
        us.innerText = userscore;
        
    } else{
        message.innerText = `You Lose! ${comchoice} beats your ${userchoice}`;
        message.style.backgroundColor = "red";
        computerscore++;
        cs.innerText = computerscore;
    }
}

const playgame = (userchoice) => {
    console.log("user choice is ", userchoice)
    // alert("Your Choice = " + userchoice);
    const comchoice = generatecomputerchoice();
    console.log("Computer choice is ", comchoice)
    // alert("Computer Choice = "+ comchoice);

    if (userchoice === comchoice) {
        drawgame();
    }
    else {
        let userwinner = false;
        if (userchoice === "rock") {

            userwinner = comchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwinner = comchoice === "scissors" ? false : true;
        }
        else {
            userwinner = comchoice === "rock" ? false : true;
        }
        showwinner(userwinner, userchoice, comchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was selected", userchoice);
        playgame(userchoice);
    });
});
