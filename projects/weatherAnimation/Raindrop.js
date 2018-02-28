function Raindrop() {
    this.dimention = floor(random(5, 15)); 
    this.posX = floor(random(0, width)); 
    this.posY = 0; 
    this.fallspeed = this.dimention / 10 + floor(random(1, 5)); 

    this.fall = () => {
        if(this.posY < height){
            this.posY += this.fallspeed; 
        }
        else {
            this.posY = 0; 
        }
    }

    this.draw = () => {
        fill(0,75,floor(random(10, 200))); 
        rect(this.posX, this.posY, this.dimention, this.dimention); 
    }
}
