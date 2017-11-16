function Snake(){
  this.x = 0;
  this.y = 0;

  this.xSpeed = block;
  this.ySpeed = 0;

  this.tail = [[this.x, this.y]];
  this.length = 0;

  this.direction = "right";

  this.update = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    //keep track of current location
    for(i = this.length; i > 0; i--){
      this.tail[i] = this.tail[i-1];
    }

    this.tail[0] = [this.x, this.y];
  }
  this.eat = function(){
    //some mechanism to grow snake
    this.length++;
  }
  this.show = function(){
    fill(0,90,200);
    for(i in this.tail){
      rect(this.tail[i][0], this.tail[i][1], block, block);
    }
  }
  this.selfBite = function(){
    for(i = 1; i < this.tail.length; i++){
      if(this.tail[0][0] === this.tail[i][0] && this.tail[0][1] === this.tail[i][1]){
        return true;
      }
    }
    return false;
  }

  this.moveUp = function(){
    if(this.length > 0 && this.direction == "down"){
      return;
    }
    this.xSpeed = 0;
    this.ySpeed = -block;
    this.direction = "up";
  }
  this.moveDown = function(){
    if(this.length > 0 && this.direction == "up"){
      return;
    }
    this.xSpeed = 0;
    this.ySpeed = block;
    this.direction = "down";
  }
  this.moveRight = function(){
    if(this.length > 0 && this.direction == "left"){
      return; 
    }
    this.xSpeed = block;
    this.ySpeed = 0;
    this.direction = "right";
  }
  this.moveLeft = function(){
    if(this.length > 0 && this.direction == "right"){
      return;
    }
    this.xSpeed = -block;
    this.ySpeed = 0;
    this.direction = "left";
  }
}
