const pos = [];
const amount = 720; // canv.width
const color = "rgba(255, 64, 64, 0.02)";
const dot = {
  size: 1,
  speed: 0.02,
  x: 720 / 2,
  y: 480 / 2,
  xv: 0,
  yv: 0,

  step() {
    return Math.random() * this.speed - (this.speed / 2);
  },

  move() {
    this.xv += this.step();
    this.yv += this.step();
    this.x += this.xv;
    this.y += this.yv;
    this.bounce();
  },

  wrap() {
    if (this.x < 0) this.x = 720; // canv.width
    else if (this.x > 720) this.x = 0;
    if (this.y < 0) this.y = 480
    else if (this.y > 480) this.y = 0; // canv.height
  },

  bounce() {
    if (this.x < 0 || this.x > 720) this.xv = -this.xv; // canv.width
    if (this.y < 0 || this.y > 480) this.yv = -this.yv;
  },
}

for(let i = 0; i < amount; i++) {
  pos.push(Object.create(dot));
}

export function redLine(canv, ctx){
  ctx.fillStyle = color;
  function draw() {
    for(let obj of pos) {
      obj.move();
      ctx.fillRect(obj.x, obj.y, dot.size, dot.size);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}