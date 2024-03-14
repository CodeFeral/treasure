import { Container, Sprite } from "pixi.js";
import { Vector } from "../utils/misc";

export abstract class SpriteContainer extends Container {
  private imageOffsets: Map<Sprite, Vector>;

  constructor() {
    super();

    this.imageOffsets = new Map<Sprite, Vector>();
  }

  public addSprite(imageName: string, offset: Vector): Sprite {
    const sprite = Sprite.from(imageName);
    sprite.anchor.set(0.5);

    this.imageOffsets.set(sprite, offset);

    this.addChild(sprite);
    return sprite;
  }

  public center(width: number, height: number): void {
    this.x = width / 2;
    this.y = height / 2;

    this.imageOffsets.forEach((offset, image) => {
      image.x = offset.x;
      image.y = offset.y;
    });
  }
}
