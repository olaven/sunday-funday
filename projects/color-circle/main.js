let width;
let center;
let circleAmount;

//draw circles
function setup(){

  width = 500;
  center = width/2;
  circleAmount = floor(random(1,10));


  createCanvas(width, width);
  background(100,200,100);


  for(i = circleAmount; i > 0; i--){

    fill(random(0,255),random(0,255),random(0,255));

    let radius = i * ((width * random(1,1.2))/circleAmount);
    ellipse(center,center,radius,radius);
    console.log(i);
  }
}
