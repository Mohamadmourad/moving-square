let x = 0;
let y = 0;
let rightBtn = document.getElementById('right');
let leftBtn = document.getElementById('left');
let topBtn = document.getElementById('top');
let bottomBtn = document.getElementById('bottom');
let object = document.getElementById('object');
let objectWidth = object.offsetWidth;
let objectHeight = object.offsetHeight;
let speed = 30; //speed
let rightInterval = '';
let leftInterval = '';
let topInterval = '';
let bottomInterval = '';
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let collectedItem = document.getElementById('collect');
let score = 0;
let moveCount = 0;


function random(){
let randomX = Math.floor(Math.random()*((screenWidth-100) - 1));
let randomY = Math.floor(Math.random()*((screenHeight-100) - 1));
return [randomX,randomY];
}

function collect(){
    if(checkCollusion()){
    let randoms = random();
    collectedItem.style.left = randoms[0] + "px";
    collectedItem.style.top = randoms[1] + "px";
    score ++;
    document.getElementById('score').innerHTML = score;
    }
}

function checkCollusion(){
    let rect1 = object.getBoundingClientRect();
let rect2 = collectedItem.getBoundingClientRect();

    if (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
      ) {
        // The two elements are touching or overlapping
        return true;
      } else {
        // The two elements are not touching or overlapping
        return false;
      }
}

function firstMove(){
    if(moveCount>1){
        return false;
    }
    moveCount++;
    if(moveCount==1){
       document.getElementById('header').style.display = 'none';
       document.getElementById('scoreBoard').style.display = 'flex';
       document.getElementById('nav').style.display = 'flex';
       collectedItem.style.display = 'flex';
    } 

}

function rightMove(){
    x += speed;
    object.style.left = x + "px";
    check();
    collect();
    firstMove()
}

function leftMove(){
    x -= speed;
    object.style.left = x + "px";
    check();
    collect();
    firstMove()
}

function topMove(){
    y -= speed;
    object.style.top = y + "px";
    check();
    collect();
    firstMove()
}

function bottomMove(){
    y += speed;
    object.style.top = y + "px";
    check();
    collect();
    firstMove()
}

rightBtn.onclick = () =>{
   rightMove();
};

leftBtn.onclick = () =>{
    leftMove();
};

topBtn.onclick = () =>{
    topMove();
};

bottomBtn.onclick = () =>{
    bottomMove();
};


function check(){
    let place = object.getBoundingClientRect();
    if(x>screenWidth-objectWidth){
        x = 0;
        object.style.left = x + "px";
    }
   else if(x< 0){
    x = screenWidth-objectWidth;
    object.style.left = x + "px";
    }
    else if(y>screenHeight-objectHeight){
        y = 0 ;
        object.style.top = y + "px";
    }
    else if(y< -50){
        y = screenHeight - objectHeight;
        object.style.top = y + "px";
    }
}

//on hold
rightBtn.addEventListener('mousedown', () => {
    rightInterval = setInterval(rightMove,100);
});

rightBtn.addEventListener('mouseup', () => {
   clearInterval(rightInterval);
});

leftBtn.addEventListener('mousedown', () => {
   leftInterval = setInterval(leftMove,100);
});

leftBtn.addEventListener('mouseup', () => {
  clearInterval(leftInterval);
});

topBtn.addEventListener('mousedown', () => {
   topInterval = setInterval(topMove,100);
});

topBtn.addEventListener('mouseup', () => {
  clearInterval(topInterval);
});

bottomBtn.addEventListener('mousedown', () => {
   bottomInterval = setInterval(bottomMove,100);
});

bottomBtn.addEventListener('mouseup', () => {
  clearInterval(bottomInterval);
});

//mobile hold
rightBtn.addEventListener('touchstart', () => {
    rightInterval = setInterval(rightMove,100);
});

rightBtn.addEventListener('touchend', () => {
   clearInterval(rightInterval);
});

leftBtn.addEventListener('touchstart', () => {
   leftInterval = setInterval(leftMove,100);
});

leftBtn.addEventListener('touchend', () => {
  clearInterval(leftInterval);
});

topBtn.addEventListener('touchstart', () => {
   topInterval = setInterval(topMove,100);
});

topBtn.addEventListener('touchend', () => {
  clearInterval(topInterval);
});

bottomBtn.addEventListener('touchstart', () => {
   bottomInterval = setInterval(bottomMove,100);
});

bottomBtn.addEventListener('touchend', () => {
  clearInterval(bottomInterval);
});

document.getElementById('leaderboardBtn').onclick = () => {//enter leaderboard
    if(!localStorage.getItem(highscore)){
        localStorage.setItem(highscore, score);
    }
    if(score > Math.floor(localStorage.getItem(highscore))){
        localStorage.setItem(highscore, score);
    }
    document.getElementById('highscore').innerHTML = Math.floor(localStorage.getItem(highscore));
    document.getElementById('leaderboard').style.display = 'flex';
}

document.getElementById('exit1').onclick = () => {//exit leaderboard
    document.getElementById('leaderboard').style.display = 'none';
}
