let player, label, testPlatform;
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Boid()
  testPlatform = new Platform()
  player.toggleForceLine()
}

function draw() {
  background(220);
  drawFloor(); // draws the floor line
  
  player.show();
  fill(200, 100, 100)
  testPlatform.show()
  testPlatform.update()
  player.update();
  player.bounceFromWalls();
  
  let platformDets = {
    x: testPlatform.x,
    y: testPlatform.y,
    w: testPlatform.width,
    h: testPlatform.height
  }
  if (player.checkCollision(platformDets)) {
    player.bounceBack()
  }
  
  // for collision detection with ground
  if (player.pos.y >= (height - 110)) {
    player.applyForce(createVector(0, -0.1))
    player.setVel(createVector(player.vel.x, 0))
  }
  else {
    player.applyForce(createVector(0, 0.1))
  }
  text(player.acc.x, 10, 10)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.setVel(createVector(0, -5))
  }
  if (keyCode === RIGHT_ARROW) {
    player.applyVel(createVector(1, 0))
  }
  if (keyCode === 68) {
    player.applyVel(createVector(2, -5))
  }
  if (keyCode === 65) {
    player.applyVel(createVector(-2, -5))
  }
}

function drawFloor() {
  this.y = height - 100
  line(0, this.y, width, this.y)
}
