let width = 500;
let boxWidth = 10;
let posX = - (width / 2);
let posY = - (width / 2);

function setup(){
    createCanvas(width, width, WEBGL);
    frameRate(10);
}
function draw(){
    fill(Math.floor(random(50,200, 100)), 50);
    rotateX(millis() / 1000);
    rotateY(millis() / 1500);
    rotateZ(millis() / 2000);

    if(boxWidth < 450){
        background(100, 200, 200);
        box(boxWidth);
        boxWidth += 10;
    } else{
        boxWidth = 10;
    }
}
