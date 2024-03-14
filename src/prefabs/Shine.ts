import config from "../config";
import gsap from "gsap";
import { Container, Sprite } from "pixi.js";
import { Vector } from "../utils/misc";
import { Mathematics } from "../utils/Mathematics";

type ShineAnimationConfig = {
  scale: number;
  blinkDuration: number;
  spinDuration: number;
  alpha: number;
};
type ShineImageConfig = {
  offset: Vector;
  animation: ShineAnimationConfig;
};

export type ShineConfig = {
  left: ShineImageConfig;
  middle: ShineImageConfig;
  right: ShineImageConfig;
};

export class Shine extends Container {
  private leftImage: Sprite;
  private middleImage: Sprite;
  private rightImage: Sprite;

  constructor() {
    super();

    this.leftImage = Sprite.from("shine");
    this.leftImage.anchor.set(0.5);
    this.middleImage = Sprite.from("shine");
    this.middleImage.anchor.set(0.5);
    this.rightImage = Sprite.from("shine");
    this.rightImage.anchor.set(0.5);

    this.animate(this.leftImage, config.shine.left.animation);
    this.animate(this.middleImage, config.shine.middle.animation);
    this.animate(this.rightImage, config.shine.right.animation);

    this.visible = true;

    this.addChild(this.leftImage, this.middleImage, this.rightImage);
  }

  private animate(image: Sprite, config: ShineAnimationConfig): void {
    if (!this.visible || !image) {
      return;
    }

    gsap.to(image, {
      alpha: config.alpha,
      repeat: -1,
      yoyo: true,
      duration: config.blinkDuration,
      ease: "sine.inOut",
    });

    gsap.to(image, {
      rotation: Mathematics.TAU,
      repeat: -1,
      duration: config.spinDuration,
      ease: "none",
    });
  }

  public center(width: number, height: number): void {
    this.x = width / 2;
    this.y = height / 2;

    this.leftImage.x = config.shine.left.offset.x;
    this.leftImage.y = config.shine.left.offset.y;

    this.middleImage.x = config.shine.middle.offset.x;
    this.middleImage.y = config.shine.middle.offset.y;

    this.rightImage.x = config.shine.right.offset.x;
    this.rightImage.y = config.shine.right.offset.y;
  }
}
