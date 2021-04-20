var rect1X = 600;
var rect1Y = 300;
var rect1Width = 100;
var rect1Height = 100;
var move = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

//create window boundaries.

function draw() {
  keyPressed();
  rectMode(CENTER);
  background(0);
  noStroke();
  fill(255);

  rect(rect1X, rect1Y, rect1Width, rect1Height);

  if (rect1X < 0) {
    rect1X = rect1X + move;
  } else if (rect1X > this.width) {
    rect1X = rect1X - move;
  } else if (rect1Y < 0) {
    rect1Y = rect1Y + move;
  } else if (rect1Y > this.height) {
    rect1Y = rect1Y - move;
  }
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
