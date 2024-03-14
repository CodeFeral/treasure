import { Container } from "pixi.js";
import { InputZone } from "./InputZone";
import { Vector } from "../utils/misc";
import config from "../config";

export type InputZonesConfig = {
  width: number;
  height: number;
  gap: number;
  offset: Vector;
};

export class InputZones extends Container {
  private left: InputZone;
  private right: InputZone;

  constructor() {
    super();

    this.left = new InputZone(
      true,
      config.inputZones.offset.x - config.inputZones.width,
      config.inputZones.offset.y,
      config.inputZones.width,
      config.inputZones.height,
      0x003000
    );
    this.right = new InputZone(
      false,
      config.inputZones.offset.x + config.inputZones.gap,
      config.inputZones.offset.y,
      config.inputZones.width,
      config.inputZones.height,
      0x000030
    );

    this.addChild(this.left, this.right);
  }

  public center(width: number, height: number): void {
    this.x = width / 2;
    this.y = height / 2;
  }
}
