
function Ant(x, y){
  this.x = x;
  this.y = y;

  //possible directions
  this.UP = 0;
  this.RIGHT = 1;
  this.DOWN = 2;
  this.LEFT = 3;

  this.dir = this.UP;//Default, unless changed


  //move forward
  this.moveForward = function() {
    //change direction
    switch (this.dir) {
      case this.UP:
        this.y--;
        break;
      case this.RIGHT:
        this.x += 1;
        break;
      case this.DOWN:
        this.y++;
        break;
      case this.LEFT:
        this.x -= 1;
        break;
      default:
        throw "invalid direction";
    }
    //check if the ant is about to move outside of borders
    if(this.y < 0){
      this.y = height - 1;
    } else if (this.y > height - 1) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = width - 1;
    } else if (this.x > width - 1) {
      this.x = 0;
    }
  }

  //turning
  this.turnRight = function() {
    //turn clockwize
    if((this.dir + 1) > this.LEFT){
      this.dir = this.UP;
    } else {
      this.dir++;
    }
  }
  this.turnLeft = function() {
    //turn agains the clock
    this.dir--;
    if(this.dir < this.UP){
      this.dir = this.LEFT;
    }
  }
}
