let x = 0;
let y = 0;
let rightBtn = document.getElementById('right');
let leftBtn = document.getElementById('left');
let topBtn = document.getElementById('top');
let bottomBtn = document.getElementById('bottom');
let object = document.getElementById('object');;
let speed = 30; //speed
let rightInterval = '';
let leftInterval = '';
let topInterval = '';
let bottomInterval = '';
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

function rightMove(){
    x += speed;
    object.style.left = x + "px";
    check();
}

function leftMove(){
    x -= speed;
    object.style.left = x + "px";
    check();
}

function topMove(){
    y -= speed;
    object.style.top = y + "px";
    check();
}

function bottomMove(){
    y += speed;
    object.style.top = y + "px";
    check();
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

function check(){
    let place = object.getBoundingClientRect();
    console.log(place.top)
    if(x>screenWidth-100){
        x = 0;
        object.style.left = x + "px";
    }
   else if(x< -50){
    x = screenWidth-100;
    object.style.left = x + "px";
    }
    else if(y>screenHeight-100){
        y = 0
        object.style.top = y + "px";
    }
    else if(y< -50){
        y = screenHeight - 110;
        object.style.top = y + "px";
    }
}


