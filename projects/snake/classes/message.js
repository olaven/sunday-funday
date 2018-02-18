function Message(){
  this.content;
  this.x;
  this.y;

  this.update = function(content, x, y){
    this.content = content;
    this.x = x;
    this.y = y;

    fill(0,100,150);
    textSize(block*1.25);
  }

  this.show = function(){
    text(this.content,this.x,this.y);
  }
}
