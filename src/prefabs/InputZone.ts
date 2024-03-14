import { Graphics } from "pixi.js";

export class InputZone extends Graphics {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color = 0x000000
  ) {
    super();

    this.beginFill(color);
    this.drawRect(0, 0, width, height);
    this.endFill();

    this.x = x;
    this.y = y;

    this.alpha = 0.2;
    this.visible = true;

    this.eventMode = "static";
  }
}
