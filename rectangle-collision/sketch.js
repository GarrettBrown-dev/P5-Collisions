var rect1X = 600;
var rect1Y = 300;
var rect1Width = 100;
var rect1Height = 100;
var move = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  keyPressed();
  rectMode(CENTER);
  background(0);
  noStroke();
  fill(255);

  rect(rect1X, rect1Y, rect1Width, rect1Height);
}

function keyPressed() {
  if (keyCode == UP_ARROW && keyIsPressed) {
    rect1Y = rect1Y - move;
  } else if (keyCode == DOWN_ARROW && keyIsPressed) {
    rect1Y = rect1Y + move;
  } else if (keyCode == LEFT_ARROW && keyIsPressed) {
    rect1X = rect1X - move;
  } else if (keyCode == LEFT_ARROW && keyIsPressed) {
    rect1X = rect1X + move;
  }
}
