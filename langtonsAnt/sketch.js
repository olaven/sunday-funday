
//user desides the steps per frame -> 1 by default
let stepsPerFrame; //assigned in separate script (index.html)
let amountOfAnts; //assigned in separate script (index.html)
//grid (2DArray)
let grid;
//array of ant-objects
let ants;
//direction of ant


function setup() {
  createCanvas(floor(windowWidth), floor(windowHeight));
  background(200);
  //if not assigned by input
  stepsPerFrame = 1;
  amountOfAnts = 1;

  grid = make2DArray(width, height);

  ants = new Array();
  //adding ants to array
  addAnt(amountOfAnts, ants);
}
function draw() {
  //DENNE LOOPER AV SEG SELV -> p5 being p5
  for(i in ants){
    let counter = 0;
    while(counter < stepsPerFrame){//user defines amount of steps per frame
      movementLogic(ants[i]);
      counter++;
    }
  }
}
//the movement logic, implemented in each draw()
function movementLogic(ant) {
  if(grid[ant.x][ant.y] == 0) {
    ant.turnRight();
    grid[ant.x][ant.y] = 1;
  } else if (grid[ant.x][ant.y] == 1) {
    ant.turnLeft();
    grid[ant.x][ant.y] = 0;
  }
  stroke(color(255 * grid[ant.x][ant.y]));
  ant.moveForward();
  point(ant.x ,ant.y);
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

function addAnt(amount, arr) {
  for(let i = 0; i < amount; i++){
    let x = floor(random(1, width - 1));
    let y = floor(random(1, height - 1));

    arr.push(new Ant(x, y));
  }
}
