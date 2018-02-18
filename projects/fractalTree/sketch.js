let angle;

function setup() {
  createCanvas(500, 500);
  background(200);

  angle = PI/4; 
}
function draw() {
  translate(width / 2, height)//flytter 0-punktet
  branch(200);
}

function branch(len) {
  line(0,0,0,-len);
  if (len > 10) {

    rotate(angle);
    branch(angle);
    rotate(-angle);
    branch(angle);

    branch(len * 0.56);//kaller seg selv
  }
}
