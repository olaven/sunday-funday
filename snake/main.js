let snake;
let food;
let scoreMessage;
let endMessage;

let block;
let score;

let insideBorders;
let lost;

function setup(){
  createCanvas(400,400);
  frameRate(10);

  block = width/25;
  score = 0;

  snake = new Snake();
  food = new Food();
  scoreMessage = new Message();
  endMessage = new Message();
}
function draw(){

  background("rgb(200,100,140)");

  food.show();
  snake.show();

  scoreMessage.update("score: " + score, width-block*5, width-5);
  scoreMessage.show();

  //game logic
  //-----------
  //if hitting
  if(snake.x === food.x && snake.y === food.y){
    snake.eat();
    score += 1;
    food = new Food();
  }
  //is insideBorders
  let insideBorders = (
      (snake.x + snake.xSpeed) < (width)
      && (snake.x + snake.xSpeed) > 0-block
      && (snake.y + snake.ySpeed) < (width)
      && (snake.y + snake.ySpeed) > + - block);

  if(insideBorders){
    snake.update();
  }
  //losing
  if(!insideBorders /* || logic for self-bite*/){
    endMessage.update("lost. score: " + score, width/2, width/2);
    endMessage.show();
    lost = true;
  }
}

function keyPressed(){
  if(lost){
    console.log("lost");
    return;
  }
  switch (keyCode) {
    case UP_ARROW:
        snake.moveUp();
      break;
    case DOWN_ARROW:
      snake.moveDown();
      break;
    case RIGHT_ARROW:
      snake.moveRight();
      break;
    case LEFT_ARROW:
      snake.moveLeft();
      break;
  }
}
function containsCoordinates(arr, x){
  for(i in arr){
    if (JSON.stringify(arr[i]) == JSON.stringify(x)) {
      return true;
    }
  }
  return false;
}
function returnAllButFirst(arr){
  returArr = [];
  for(i in arr){
    if(i !== 0){
      returArr.push(arr[i]);
    }
  }
  return returArr;
}
