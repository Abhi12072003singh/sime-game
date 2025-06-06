let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }


})

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}


function userFlash(btn) {
    btn.classList.add("userFlash")
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250)
}

let h2 = document.querySelector("h2");
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor); 
    console.log(gameSeq)
    gameFlash(randBtn)

}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h2.innerHTML = `Game over!! <b>your score was ${level}</b> </br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}


let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns) {
    btn.addEventListener("click", btnPress)
}

function btnPress() {
    let btn = this
    userFlash(btn)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor)

    checkAns(userSeq.length - 1);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}