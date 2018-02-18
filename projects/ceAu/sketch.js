//grid with values
let grid;
//list of cell objects
let runners;

function setup(){
  createCanvas(100, 100);
  background(200);

  grid = make2dArray(width, height, 0);

  runners = [(new Runner(50, 50, "DOWN"))];//added one for testin
}
function draw(){
  console.log(runners[0].y);
  movementLogic(runners);
}

function movementLogic(arr){
  for(runner of arr){
    runner.moveForward();
    console.log(runner.y);
    //make sure movement is inside of borders
    if (runner.x <= 0) {
      runner.x = width - 1;
    } else if (runner.x >= (width - 1)) {
      runner.x = 0;
    }
    if(runner.y <= 0){
      runner.y = height - 1;
    } else if (runner.y <= height - 1) {
      runner.y = 0;
    }

    stroke(color(255 * grid[runner.x][runner.y]));

    runner.moveForward();
    point(runner.x, runner.y);
  }
}


function make2dArray(rows, columns, value){
  let retArr = [];
  for(let i = 0; i < rows; i++){
    retArr.push([]);
    for(let j = 0; j < columns; j++){
      retArr[i].push(value);
    }
  }
  return retArr;
}
