function Wall(dimensions) {
  let { x, y, width, height, toY } = dimensions;
  PIXI.Graphics.call(this);
  this.lineStyle(4, 0x00000, 1);
  this.moveTo(0,0);
  this.lineTo(width, toY);
  this.endFill();
  this.position.set(x, y);
};

Wall.prototype = Object.create(PIXI.Graphics.prototype);
