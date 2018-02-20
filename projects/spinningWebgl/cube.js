function cube(x, y, z, posX, posY){
  this.x = x;
  this.y = y;
  this.z = z;

  this.create = function(){
    translate(posX, posY);
    box(this.x, this.y, this.z);
  }
}
