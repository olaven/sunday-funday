let width = 500;
let cubes = [];
let baseSpeed = 1000;
let counter = 0;
let cubeColor = (100,50,100);

function setup(){
  createCanvas(width, width, WEBGL);
  populateCubes();
}
function draw(){
  background(200 + counter,100 + counter,100 + counter);
  if (counter < 105) {
    cubeColor = (200 + counter, 50 + counter, 10 + counter); 
  }
  fill(cubeColor)

  for(cube of cubes){
    rotateY(millis() / 1000);
    cube.create();
  }

  counter += 2.05;
}

function populateCubes(){
  for(i = 0; i < 10; i++){
    cubes[i] = new cube(random((width / 200), (width / 100)), random((width / 40), (width / 2)), random(30, 45), i * width/(width/4), width/(width/10))
  }
}
