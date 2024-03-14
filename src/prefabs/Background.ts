import { Container, Sprite } from "pixi.js";

export class Background extends Container {
  public scaleFactor = 0;

  private image: Sprite;
  private initialHeight: number;

  constructor() {
    super();

    this.image = Sprite.from("background");
    this.initialHeight = this.image.width;
    this.scaleFactor = this.calculateScaleFactor(
      window.innerWidth,
      window.innerHeight
    );

    this.image.anchor.set(0.5);

    this.addChild(this.image);
  }

  private calculateScaleFactor(width: number, height: number): number {
    let scaleFactor = 0;
    if (width > height) {
      scaleFactor = height / this.initialHeight;
    } else {
      scaleFactor = width / this.initialHeight;
    }
    scaleFactor = Math.min(scaleFactor, 1);
    scaleFactor *= 2;

    return scaleFactor;
  }

  public resize(width: number, height: number) {
    this.scaleFactor = this.calculateScaleFactor(width, height);
    this.scale.x = this.scaleFactor;
    this.scale.y = this.scaleFactor;

    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
  }
}
