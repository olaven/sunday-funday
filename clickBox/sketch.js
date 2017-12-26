let width = 500;
let cubes = [];
let baseSpeed = 1000;

function setup(){
  createCanvas(width, width, WEBGL);
  populateCubes();
}
function draw(){
  background(80,50,100);
  fill(100,100,100);
  //millis() apparenlty is not available globally
  rotateX(millis() / baseSpeed);
  rotateY(millis() / (baseSpeed * 10));

  for(i in cubes){
    cubes[i].create();
  }

}


function populateCubes(){
  for(i = 0; i < 10; i++){
    cubes[i] = new cube(width / 4, width / 10, random(30, 45), i * width/(width/4), width/(width/100))
  }
}
