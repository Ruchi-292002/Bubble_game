var timer=60;
var score=0;
var hitrn = 0;


function makeBubble(){
var clutter = "";

for (var i=1;i<=154;i++){
    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
    var timerint = setInterval(function (){
        if(timer>0){   
        timer--;
        document.querySelector("#timerval").textContent =timer;
        }else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>GAME END<\h1>`;
        }
    },1000);
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent =hitrn;
}


function insertScore(){
    score +=10;
    document.querySelector("#scorel").textContent = score;

}

document.querySelector("#pbtm")
.addEventListener("click",function (details){
    var clickednum = (details.target.textContent);
    if(clickednum == hitrn){
        insertScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
insertScore();

