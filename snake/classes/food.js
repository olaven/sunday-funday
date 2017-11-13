function Food(){
  this.x = floor(random(0,width/block))*block
  this.y = floor(random(0,width/block))*block;

  this.parts = [[this.x, this.y]];
  this.activePart = 0;

  this.show = function(){
    fill(150,10,100); 
    rect(this.x, this.y, block, block);
  }
  this.update = function(){
    this.x = floor(random(0,width/block))*block
    this.y = floor(random(0,width/block))*block;
  }
}
