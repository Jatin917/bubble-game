var timer =  60;
var newN = 0;
var score = 0;
function makeBubble(){
    let clutter = "";
    
    for (let i = 1; i <= 90; i++) {
        var hitingN = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${hitingN}</div>`   
    }
    
    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    let timerV = document.querySelector("#timerV");
    let timerint = setInterval(function(){
        if (timer>0) {
            timer--;
            timerV.textContent = timer; 
        }
        else{
            document.querySelector('#pbtm').innerHTML = ``;
            modalShow();
            clearInterval(timerint);
        }
    },1000)
    
}

function getNewHit(){
    newN = Math.floor(Math.random()*10);
    let newH = document.querySelector("#hitV");
    newH.textContent = newN;
}

function increaseScore(){
    let scoreV = document.querySelector("#scoreV");
    score+=10;
    scoreV.textContent = score;
}

function modalShow(){
    var main = document.querySelector("#main");
    var modal = document.querySelector("#modal");
    main.style.opacity = 0.8;
    modal.style.opacity = 1;
    var scoreM = document.querySelector("#scoreM");
    scoreM.textContent = score;
}

makeBubble();
runTimer();
getNewHit();

document.querySelector('#pbtm').addEventListener('click',function(dets){
    var hittedN = Number(dets.target.textContent);
    if(hittedN===newN){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})


