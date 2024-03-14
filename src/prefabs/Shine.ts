import config from "../config";
import gsap from "gsap";
import { Mathematics } from "../utils/Mathematics";
import { SpriteContainer } from "./SpriteContainer";
import { Sprite } from "pixi.js";
import { Vector } from "../utils/misc";

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

export class Shine extends SpriteContainer {
  private leftImage: Sprite;
  private middleImage: Sprite;
  private rightImage: Sprite;

  constructor() {
    super();

    this.leftImage = this.addSprite("shine", config.shine.left.offset);
    this.middleImage = this.addSprite("shine", config.shine.middle.offset);
    this.rightImage = this.addSprite("shine", config.shine.right.offset);

    this.animate(this.leftImage, config.shine.left.animation);
    this.animate(this.middleImage, config.shine.middle.animation);
    this.animate(this.rightImage, config.shine.right.animation);

    this.visible = true;
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
}
