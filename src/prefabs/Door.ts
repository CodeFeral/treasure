import config from "../config";
import { Container, Sprite } from "pixi.js";
import { Vector } from "../utils/misc";

export type DoorConfig = {
  closedOffset: Vector;
  shadowOffset: Vector;
  openOffset: Vector;
};

export class Door extends Container {
  private closedImage: Sprite;
  private shadowImage: Sprite;
  private openImage: Sprite;

  constructor() {
    super();

    this.closedImage = Sprite.from("doorClosed");
    this.closedImage.anchor.set(0.5);
    this.shadowImage = Sprite.from("doorOpenShadow");
    this.shadowImage.anchor.set(0.5);
    this.openImage = Sprite.from("doorOpen");
    this.openImage.anchor.set(0.5);

    this.setClosed();

    this.addChild(this.closedImage, this.shadowImage, this.openImage);
  }

  public setOpen() {
    this.closedImage.visible = false;
    this.openImage.visible = true;
    this.shadowImage.visible = true;
  }

  public setClosed() {
    this.closedImage.visible = true;
    this.openImage.visible = false;
    this.shadowImage.visible = false;
  }

  public center(width: number, height: number): void {
    this.x = width / 2;
    this.y = height / 2;

    this.closedImage.x = config.door.closedOffset.x;
    this.closedImage.y = config.door.closedOffset.y;

    this.shadowImage.x = config.door.openOffset.x + config.door.shadowOffset.x;
    this.shadowImage.y = config.door.openOffset.y + config.door.shadowOffset.y;

    this.openImage.x = config.door.openOffset.x;
    this.openImage.y = config.door.openOffset.y;
  }
}
