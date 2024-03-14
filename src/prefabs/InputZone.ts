import { Graphics } from "pixi.js";

export class InputZone extends Graphics {
  private left: boolean;

  constructor(
    left: boolean,
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
    this.alpha = 1;

    this.left = left;

    this.x = x;
    this.y = y;

    this.eventMode = "static";
    this.on("pointerdown", this.handleClick);
  }

  private handleClick(): void {
    if (this.left) {
      console.log("LEFT");
    } else {
      console.log("RIGHT");
    }
  }
}
