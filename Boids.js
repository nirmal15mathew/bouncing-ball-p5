// class for creating the ball or simply a body
class Boid {
  constructor() {
    this.pos = createVector(10, 10)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0);
    this.range = 0;
    this.forceLine = new ForceLine()
    this.showForce = false
  }
  show() {
    circle(this.pos.x, this.pos.y, 15); // feel free to change this to rectangle or triangle or custom shape
    if (this.showForce) {
      this.forceLine.show()
    }
  }
  update() {
    this.forceLine.setStart(this.pos.x,this.pos.y);
    this.forceLine.setEnd(this.acc.x, this.acc.y)
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }
  applyForce(force) {
    this.acc.add(force)
  }
  setPos(x, y) {
    this.pos = createVector(x, y)
  }
  setVel(vel_vector) {
    this.vel = vel_vector
  }
  applyVel(vel) {
    this.vel.add(vel)
  }
  
  // bounce from walls
  bounceFromWalls() {
    if (this.pos.x >= width - 5 || this.pos.x <= 5) {
      this.setVel(this.vel.rotate(PI/2))
    }
  }
  
  checkCollision(rect2) {
    let rect1 = {
      x: this.pos.x,
      y: this.pos.y,
      w: 10,
      h: 10
    }
    if (rect1.x < rect2.x + rect2.w &&
   rect1.x + rect1.w > rect2.x &&
   rect1.y < rect2.y + rect2.h &&
   rect1.y + rect1.h > rect2.y) {
    // collision detected!
      return true;
}
    else {
      return false;
    }
  }
  bounceBack() {
    this.setVel(this.vel.rotate(PI/2))
  }
  toggleForceLine() {
    this.showForce = !this.showForce;
  }
}
// Object for visualising force
// don't look not finished
function ForceLine() {
  this.start = createVector(0,0)
  this.end = createVector(0, 0)
}

ForceLine.prototype.show = function(){
  line(this.start.x, this.start.y, this.end.x, this.end.y)
}

ForceLine.prototype.setStart = function(x, y) {
  this.start.x = x
  this.start.y = y
}

ForceLine.prototype.setEnd = function(x, y) {
  this.end.x = x
  this.end.y = y
}

ForceLine.prototype.getLength = function() {
  return dist(this.start.x, this.start.y, this.end.x, this.end.y)
}
