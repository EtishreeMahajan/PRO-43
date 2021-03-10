hr = hour();
mn = minute();
sc = second();

var hr,mn,sc;
var hrAngle,scAngle,mnAngle;
function setup() {
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255, 255, 255);
  angleMode(DEGREES);
  hrAngle = map( 0, 60, 0, 360);
  mnAngle = map( 0, 60, 0, 360);
  scAngle = map( 0, 60, 0, 360);

  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  drawSprites();
}