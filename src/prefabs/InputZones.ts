import config from "../config";
import { Container } from "pixi.js";
import { InputZone } from "./InputZone";
import { Vector } from "../utils/misc";
import { Logic } from "../core/Logic";

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
      config.inputZones.offset.x - config.inputZones.width,
      config.inputZones.offset.y,
      config.inputZones.width,
      config.inputZones.height,
      0x003000
    );

    this.right = new InputZone(
      config.inputZones.offset.x + config.inputZones.gap,
      config.inputZones.offset.y,
      config.inputZones.width,
      config.inputZones.height,
      0x000030
    );

    this.left.on("pointerup", this.handleLeftEvent);
    this.right.on("pointerup", this.handleRightEvent);

    this.addChild(this.left, this.right);
  }

  public center(width: number, height: number): void {
    this.x = width / 2;
    this.y = height / 2;
  }

  private handleLeftEvent() {
    Logic.counterClockwise();
  }

  private handleRightEvent(): void {
    Logic.clockwise();
  }
}
