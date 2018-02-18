function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}
function mousePressed() {
  drawCircle(mouseX, mouseY, 5, 40);
}
function draw() {

}

function drawCircle(x, y, startRadius, endRadius) {
  counter = startRadius;
  let interval = setTimeout(function(){
    if (counter < endRadius) {
      ellipse(x, y, counter, counter);
      counter += 10;
      console.log("hei");
    } else {
      clearInterval(interval);
    }
  }, 50)
}
