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
  grid = make2DArray(width, height);
  x = width / 2;
  y = height / 2 ;
  //place ant
  grid[x][y] = 1;
  //starting direction
  dir = UP;
}
function draw() {
  //DENNE LOOPER AV SEG SELV -> p5 being p5
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
  switch (dir) {
    case UP:
      y -= 1;
      break;
    case RIGHT:
      x += 1;
      break;
    case DOWN:
      y += 1;
      break;
    case LEFT:
      x -= 1;
      break;
    default:
      throw "invalid direction";
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
