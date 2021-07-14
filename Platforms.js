// a simple class to control the moving platform
class Platform {
  constructor() {
    this.x = 100;
    this.y = 0;
    this.vel = 0.5
    this.width = 150
    this.height = 30
  }
  show() {
    rect(this.x, this.y, this.width, this.height)
  }
  update() {
    this.y += this.vel;
    if (this.y > height + 30) {
      this.y = -30;
    }
  }
}
