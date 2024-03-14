import { Container, Sprite } from "pixi.js";
import { Vector } from "../utils/misc";

const centerOffset: Vector = {
  x: 0.53,
  y: 0.56,
};

const shadowOffset: Vector = {
  x: 0.03,
  y: -0.03,
};

export class Wheel extends Container {
  private image: Sprite;
  private shadow: Sprite;

  constructor() {
    super();

    this.shadow = Sprite.from("wheelShadow");
    this.shadow.anchor.set(
      centerOffset.x + shadowOffset.x,
      centerOffset.y + shadowOffset.y
    );

    this.image = Sprite.from("wheel");
    this.image.anchor.set(centerOffset.x, centerOffset.y);

    this.addChild(this.shadow, this.image);
  }

  public setSize(size: number): void {
    this.shadow.width = size;
    this.shadow.height = size;

    this.image.width = size;
    this.image.height = size;
  }
}
