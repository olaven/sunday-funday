
//user desides the steps per frame -> 1 by default
let stepsPerFrame;
//grid (2DArray)
let grid;
//position of ant
let x;
let y;
//direction of ant
let dir;
//possible directions
const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

function setup() {
  createCanvas(floor(windowWidth), floor(windowHeight));
  background(200);
  stepsPerFrame = 1;
  grid = make2DArray(width, height);
  x = floor(width / 2);
  y = floor(height / 2);
  //place ant
  grid[x][y] = 1;
  //starting direction
  dir = UP;
}
function draw() {
  //DENNE LOOPER AV SEG SELV -> p5 being p5
  movementLogic();
  let counter = 0;
  while(counter < stepsPerFrame){//user defines amount of steps per frame
    movementLogic();
    counter++;
  }
}
//the movement logic, implemented in each draw()
function movementLogic() {
  if(grid[x][y] == 0) {
    turnRight();
    grid[x][y] = 1;
  } else if (grid[x][y] == 1) {
    turnLeft();
    grid[x][y] = 0;
  }
  stroke(color(255 * grid[x][y]));
  moveForward();
  point(x ,y);
}

//move forward
function moveForward() {
  //change direction
  switch (dir) {
    case UP:
      y--;
      break;
    case RIGHT:
      x += 1;
      break;
    case DOWN:
      y++;
      break;
    case LEFT:
      x -= 1;
      break;
    default:
      throw "invalid direction";
  }
  //check if the ant is about to move outside of borders
  if(y < 0){
    y = height - 1;
  } else if (y > height - 1) {
    y = 0;
  }

  if (x < 0) {
    x = width - 1;
  } else if (x > width - 1) {
    x = 0;
  }
}
//turning
function turnRight() {
  //turn clockwize
  if((dir + 1) > LEFT){
    dir = UP;
  } else {
    dir++;
  }
}
function turnLeft() {
  //turn agains the clock
  dir--;
  if(dir < UP){
    dir = LEFT;
  }
}
//returns a 2d array with specified "rows" and "columns"
function make2DArray(rows, columns){
  let returArr = [];
  for(let i = 0; i < rows; i++){
    returArr.push([]);
    for(let j = 0; j < columns; j++){
      returArr[i].push(0);
    }
  }
  return returArr;
}
