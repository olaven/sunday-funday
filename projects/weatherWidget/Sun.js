function Sun(){
    this.angle = 180; 
    this.x; 
    this.y;

    
    this.move = () => {
        this.angle = (this.angle % 360) + 1 / 200; 
    }
    this.draw = () => {
        //point the sun revolves around 
        let centerX = width / 2; 
        let centerY = height; 
        let r = height / 1.5; 
        //the x and y pos of the sun based on current angle 
        this.setX(r * cos(this.angle) + centerX); 
        this.setY(r * sin(this.angle) + centerY); 

        //draw new sun
        push(); 
        fill("#FDFD96"); 
        ellipse(this.x, this.y, width/5, width/5);
        pop(); 
    }
    /**
     * 
     * @param {number} x sets the x-position of sun
     */
    this.setX = x => {
        this.x = x;
    };
    /**
     * 
     * @param {number} y sets the y-position of sun
     */
    this.setY = y => {
        this.y = y;
    };
    /**
     * 
     * @param {number} angle sets the angle in relation to center  
     */
    this.setAngle = (angle) => {
        this.angle = angle; 
    }
}