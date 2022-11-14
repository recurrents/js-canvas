const pos = [];
const amount = 720; // canv.width
const color = "rgba(255, 64, 64, 0.02)";
let canv;
const dot = {
  size: 1,
  speed: 0.02,
  x: 0,
  y: 0,
  xv: 0,
  yv: 0,

  center(canv) {
    this.x = canv.width / 2;
    this.y = canv.height / 2;
  },

  randomPos(canv) {
    this.x = Math.random() * canv.width;
    this.y = Math.random() * canv.height;
  },
  
  line(canv, i) {
    this.x = i;
    this.y = canv.height / 2;
  },

  step() {
    return Math.random() * this.speed - (this.speed / 2);
  },

  move(ctx) {
    this.xv += this.step();
    this.yv += this.step();
    this.x += this.xv;
    this.y += this.yv;
    this.bounce();
    ctx.fillRect(this.x, this.y, this.size, this.size);
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

export function redLine(canv, ctx){
  ctx.fillStyle = color;

  for(let i = 0; i < amount; i++) {
    const newDot = Object.create(dot);
    //newDot.randomPos(canv);
    newDot.line(canv, i)
    pos.push(newDot);
  }

  function draw() {
    for(let obj of pos) {
      obj.move(ctx);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}