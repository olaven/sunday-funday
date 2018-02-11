let snake;
let food;
let scoreMessage;
let endMessage;

let block;
let score;

let insideBorders;
let lost;

const W_KEY = 87
    , S_KEY = 83
    , D_KEY = 68
    , A_KEY = 65
    , K_KEY = 75
    , J_KEY = 74
    , L_KEY = 76
    , H_KEY = 72;

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
  if(!insideBorders || snake.selfBite()){
    endMessage.update("lost. score: " + score, width/2, width/2);
    endMessage.show();
    noLoop();
    lost = true;
  }
}

function keyPressed(){
  if(lost){
    location.reload();
    return;
  }
  switch (keyCode) {
    case UP_ARROW:
    case W_KEY:
    case K_KEY:
      snake.moveUp();
      break;
    case DOWN_ARROW:
    case S_KEY:
    case J_KEY:
      snake.moveDown();
      break;
    case RIGHT_ARROW:
    case D_KEY:
    case L_KEY:
      snake.moveRight();
      break;
    case LEFT_ARROW:
    case A_KEY:
    case H_KEY:
      snake.moveLeft();
      break;
  }
}
