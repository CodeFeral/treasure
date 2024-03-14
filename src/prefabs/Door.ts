import { Container, Sprite } from "pixi.js";
import { Vector } from "../utils/misc";

const centerOffset: Vector = {
  x: 0.47,
  y: 0.52,
};

const openOffset: Vector = {
  x: -1.14,
  y: -0.01,
};

const shadowOffset: Vector = {
  x: 0.05,
  y: -0.03,
};

export class Door extends Container {
  private imageOpen: Sprite;
  private imageClosed: Sprite;
  private openShadow: Sprite;

  constructor() {
    super();

    this.imageOpen = Sprite.from("doorOpen");
    this.imageOpen.anchor.set(
      centerOffset.x + openOffset.x,
      centerOffset.y + openOffset.y
    );
    this.imageOpen.visible = true;

    this.openShadow = Sprite.from("doorOpenShadow");
    this.openShadow.anchor.set(
      centerOffset.x + openOffset.x + shadowOffset.x,
      centerOffset.y + openOffset.y + shadowOffset.y
    );
    this.openShadow.visible = true;

    this.imageClosed = Sprite.from("doorClosed");
    this.imageClosed.anchor.set(centerOffset.x, centerOffset.y);
    this.imageClosed.visible = true;

    this.addChild(this.imageOpen, this.openShadow, this.imageClosed);
  }

  public setSize(size: number): void {
    this.imageOpen.width = size;
    this.imageOpen.height = size;

    this.openShadow.width = size;
    this.openShadow.height = size;

    this.imageClosed.width = size;
    this.imageClosed.height = size;
  }
}
