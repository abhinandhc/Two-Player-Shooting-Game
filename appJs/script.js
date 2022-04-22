let p1score = 0;
let p2score = 0;
const nextDiv = document.querySelectorAll(".btn");
const nextRound = document.querySelectorAll(".btn-start");
const gameRounds = document.querySelectorAll(".game-round");
let divNum = 0;

nextDiv.forEach((divs) => {
    divs.addEventListener("click", () => {
        divNum++;
        updateDiv();
    });
});
function updateDiv() {
    gameRounds.forEach((rounds) => {
        rounds.classList.contains("game-round-active") &&
            rounds.classList.remove("game-round-active");
    });
    gameRounds[divNum].classList.add("game-round-active");
}

nextRound.forEach((rds) => {
    rds.addEventListener("click", () => {
        start();
    })
})
function start() {
    let num1 = (Math.floor(Math.random() * 5)) + 1;
    let num2 = (Math.floor(Math.random() * 5)) + 1;

    if (num1 > num2) {
        p1score++;
        document.getElementById("result").innerHTML = "Player1 Won!!";
        document.getElementById("score1").innerHTML = p1score;

    }
    else if (num1 < num2) {
        p2score++;
        document.getElementById("result").innerHTML = "Player2 Won!!";
        document.getElementById("score2").innerHTML = p2score;
    }
    else {
        document.getElementById("result").innerHTML = "Draw!!";
    }
    if (p1 >= 3) {
        document.getElementById("final").innerHTML = "Player1 Won!!";
    }
}
