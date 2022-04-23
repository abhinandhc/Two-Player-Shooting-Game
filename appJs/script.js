let p1score = 0;
let p2score = 0;
const nextDiv = document.querySelectorAll(".btn");
const nextRound = document.querySelectorAll(".btn-start");
const gameRounds = document.querySelectorAll(".game-round");
let divNum = 0;
let currentDiv = 0;
let gameContinue = true;

// setting meter tag
var metertag1 = document.getElementsByTagName("meter")[0];
metertag1.setAttribute("value", "100");
metertag1.setAttribute("style", "--error: 10%;--warning: 50%;--ok: 100%;");

var metertag2 = document.getElementsByTagName("meter")[1];
metertag2.setAttribute("value", "100");
metertag2.setAttribute("style", "--error: 10%;--warning: 50%;--ok: 100%;");

// moving through next divs
nextDiv.forEach((divs) => {
    divs.addEventListener("click", () => {
        divNum++;
        updateDiv();
        currentDiv = divNum;
    });
});
function updateDiv() {
    gameRounds.forEach((rounds) => {
        rounds.classList.contains("game-round-active") &&
            rounds.classList.remove("game-round-active");
    });
    gameRounds[divNum].classList.add("game-round-active");
}
//setting up the start button
nextRound.forEach((rds) => {
    rds.addEventListener("click", () => {
        start();
    })
})

//function to give the result
function start() {
    let num1 = (Math.floor(Math.random() * 5)) + 1;
    let num2 = (Math.floor(Math.random() * 5)) + 1;

    if (num1 > num2) {
        p1score++;
        document.getElementById("result").innerHTML = "Player1 Won the Round!!";
        document.getElementById("score1").innerHTML = p1score;
        metercheck1();
        scorecheck();
    }
    else if (num1 < num2) {
        p2score++;
        document.getElementById("result").innerHTML = "Player2 Won the Round!!";
        document.getElementById("score2").innerHTML = p2score;
        metercheck2();
        scorecheck();
    }
    else {
        document.getElementById("result").innerHTML = "Draw!!";
    }

}

//function to show the life via meter bar
function metercheck1() {
    if (p1score == 1) {
        metertag2.setAttribute("value", "75");
        metertag2.setAttribute("style", "--error: 50%;--warning: 100%;--ok: 50%;");
    }
    else if (p1score == 2) {
        metertag2.setAttribute("value", "50");
        metertag2.setAttribute("style", "--error: 100%;--warning: 50%;--ok: 0%;");
    }
    else {
        metertag2.setAttribute("value", "0");
        metertag2.setAttribute("style", "--error: 0%;--warning: 0%;--ok: 0%;");
    }
}
function metercheck2() {
    if (p2score == 1) {
        metertag1.setAttribute("value", "75");
        metertag1.setAttribute("style", "--error: 50%;--warning: 100%;--ok: 0%;");
    }
    else if (p2score == 2) {
        metertag1.setAttribute("value", "50");
        metertag1.setAttribute("style", "--error: 100%;--warning: 50%;--ok: 0%;");
    }
    else {
        metertag1.setAttribute("value", "0");
        metertag1.setAttribute("style", "--error: 0%;--warning: 0%;--ok: 0%;");
    }
}

//function to check the winner of the game
function scorecheck() {
    if (p1score == 3) {
        gameRounds[currentDiv].classList.remove("game-round-active");
        gameRounds[6].classList.add("game-round-active");
        document.getElementById("final").innerHTML = "Player1 Won the Game!!";
    }
    else if (p2score == 3) {
        gameRounds[currentDiv].classList.remove("game-round-active");
        gameRounds[6].classList.add("game-round-active");
        document.getElementById("final").innerHTML = "Player2 Won the Game!!";
    }
    else {
        document.getElementById("final").innerHTML = " None of the Players Won, Please refresh the page and start a new game";
    }
}