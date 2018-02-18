let staticPositions; 

function setup(){
    createCanvas(400, 400);

    staticPositions = [
        createVector(width,    0),
        createVector(width,  200),
        createVector(width,  400),
        createVector(    0,    0),
        createVector(    0,  200),
        createVector(    0,  400)
    ]; 
}
function draw(){
    background(100, 200, 100); 
    
    push(); 
    for(staticPosition of staticPositions){
        strokeWeight(floor(random(10, 20))); 
        line(mouseX, mouseY, staticPosition.x, staticPosition.y)
        pop(); 
    }
}