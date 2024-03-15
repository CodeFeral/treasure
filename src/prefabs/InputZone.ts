import { Graphics } from "pixi.js";
import config from "../config";

export class InputZone extends Graphics {
  constructor(x: number, y: number, width: number, height: number) {
    super();

    this.beginFill(0x000000);
    this.drawRect(0, 0, width, height);
    this.endFill();

    this.x = x;
    this.y = y;

    this.alpha = config.inputZones.show ? 1 : 0;
    this.visible = true;

    this.eventMode = "static";
  }
}
