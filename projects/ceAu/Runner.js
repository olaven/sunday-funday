function Runner(x, y, defaultDirection){
  this.x = x;
  this.y = y;

  //possible directions
  this.directions = {
    "UP": 0,
    "RIGHT": 1,
    "DOWN" : 2,
    "LEFT": 3
  }
  //default direction
  this.direction = this.directions[defaultDirection];
  //move the runner forward
  this.moveForward = ()=>{
    switch (this.direction) {
      case this.directions["UP"]:
        this.y--;
        break;
      case this.directions["RIGHT"]:
        this.x++;
        break;
      case this.directions["DOWN"]:
        this.y++;
        break;
      case this.directions["LEFT"]:
        this.x--;
        break;
      default:
        throw "invalid direction";
    }
  }
  //move backwards -> oposite direction of direction
  this.moveBackward = ()=>{
    switch (this.direction) {
      case this.directions["UP"]:
        this.y++;
        break;
      case this.directions["RIGHT"]:
        this.x--;
        break;
      case this.directions["DOWN"]:
        this.y--;
        break;
      case this.directions["LEFT"]:
        this.x++;
        break;
      default:
        throw "invalid direction";
    }
  }
  //turn the runner to the left
  this.turnLeft = ()=>{
    this.direction--;
    if (this.direction < this.directions["UP"]) {
      this.direction = this.directions["LEFT"];
    }
  }
  //turn the runner to the right
  this.turnRight = ()=>{
    this.direction++;
    if (this.direction > this.directions["LEFT"]) {
      this.direction = this.directions["UP"];
    }
  }
}
