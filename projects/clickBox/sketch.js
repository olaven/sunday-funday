let width = 500;
let posX = - width / 2;


function setup(){
  createCanvas(width, width, WEBGL);
}
function draw(){
  background(100, 40, 100);
  for(let i = 0; i < 10; i++){
    transate(posX, 0, 0);
    fill(100, 100, 100); 
    box(width / 4);
    posY += 10;
  }
}
