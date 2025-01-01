let userScore = 0 ;
let comScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSc = document.querySelector("#user-score");
const compsc = document.querySelector("#computer-score");


const genComputerChoice = () => {
    let options = [ "rock", "paper", "scissors"] ;
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame = () => {
    msg.innerText = "Game Drawn , Play Again" ;
};

const showWinner = (userWin) =>{
    if( userWin ){
        userScore++;
        userSc.innerText = userScore;
        msg.innerText = "You Won" ;    
        msg.style.backgroundColor = "green";
    } 
    else {
        comScore++;
        compsc.innerText = comScore;
        msg.innerText = "You Lose" ;
        msg.style.backgroundColor = "red";   
    }
}

const playGame = (userChoice) => {
    //generate computer choice 
    const compChoice = genComputerChoice() ; 

    if( userChoice === compChoice ){
        drawGame() ;
    }
    else{
        let userWin = true ;
        if( userChoice === "rock"){
            if( compChoice === "paper") userWin = false ;
        }
        else if( userChoice === "paper"){
            if( compChoice === "scissors") userWin = false ;
        }
        else{
            if( compChoice === "rock") userWin = false ;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 