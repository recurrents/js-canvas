export function redLine(canv, ctx){
  cancelAnimationFrame(draw)
  const pos = [];
  const dot = {
    size: 1,
    amount: canv.width,
    yPos: canv.height / 2,
    speed: 0.02
  }

  ctx.fillStyle="rgba(255, 64, 64, 0.02)";

  for(let i = 0; i < dot.amount; i++) {
		pos.push({x: i, y: dot.yPos, xv: 0, yv: 0});
	}

  const random = () => Math.random() * dot.speed - (dot.speed / 2)

  function wrap(pos){
    if (pos.x < 0) pos.x = canv.width;
    else if (pos.x > canv.width) pos.x = 0;
    if (pos.y < 0) pos.y = canv.width;
    else if (pos.y > canv.width) pos.y = 0;
    return pos;
  }

  function moveDot(obj) {
    obj.xv += random();
    obj.yv += random();
    obj.x += obj.xv;
    obj.y += obj.yv;
    obj = wrap(obj);
    return obj;
  }

  function draw() {
    for(let obj of pos) {
      obj = moveDot(obj);
      ctx.fillRect(obj.x, obj.y, dot.size, dot.size);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}