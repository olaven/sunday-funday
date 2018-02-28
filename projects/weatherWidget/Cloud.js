function Cloud(){
    this.x = floor(random(0, width));
    this.y = floor(random(0, height/4)); 
    this.dimention = floor(random(20, 100)); 
    this.speed = random() / this.dimention * 50;

    this.move = () => {
        //TODO: implement based on wind 
        if(this.x > width){
            this.x = 0; 
        } else {
            this.x += this.speed; 
        }
    };
    this.draw = () => {
        push(); 
        fill(200, 200, 210); 
        rect(this.x, this.y, this.dimention, this.dimention);
        pop(); 
    }; 
}