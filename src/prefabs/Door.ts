import config from "../config";
import { SpriteContainer } from "./SpriteContainer";
import { Sprite } from "pixi.js";
import { Vector } from "../utils/misc";

export type DoorConfig = {
  closedOffset: Vector;
  shadowOffset: Vector;
  openOffset: Vector;
};

export class Door extends SpriteContainer {
  private closedImage: Sprite;
  private shadowImage: Sprite;
  private openImage: Sprite;

  constructor() {
    super();

    this.closedImage = this.addSprite("doorClosed", config.door.closedOffset);
    this.shadowImage = this.addSprite("doorShadow", config.door.shadowOffset);
    this.openImage = this.addSprite("doorOpen", config.door.openOffset);

    this.setClosed();
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
}
