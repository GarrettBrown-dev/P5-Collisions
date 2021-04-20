var rect1X = 600;
var rect1Y = 300;
var rect1Width = 100;
var rect1Height = 100;
var move = 5;
var rect2X = 300;
var rect2Y = 300;
var rect2Width = 50;
var rect2Height = 50;

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

  //barrier
  fill(255, 0, 0);
  rect(rect2X, rect2Y, rect2Width, rect2Height);

  if (
    rect1X > rect2X - rect2Width - 30 &&
    rect1X < rect2X + rect2Width + 30 &&
    rec1Y > rect2Y - rect2Height - 30 &&
    rectY < rect2Y + rect2Height + 30
  ) {
    move = move * -1;
  } else {
    move = 5;
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
