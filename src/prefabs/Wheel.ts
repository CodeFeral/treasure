import config from "../config";
import gsap from "gsap";
import { Mathematics } from "../utils/Mathematics";
import { SpriteContainer } from "./SpriteContainer";
import { Sprite } from "pixi.js";
import { Vector } from "../utils/misc";

export type WheelConfig = {
  centerOffset: Vector;
  shadowOffset: Vector;
};

const rotationDegrees: number = 60;

export class Wheel extends SpriteContainer {
  private image: Sprite;
  private shadow: Sprite;

  private isRotating: boolean;

  constructor() {
    super();

    this.shadow = this.addSprite("wheelShadow", config.wheel.shadowOffset);
    this.image = this.addSprite("wheel", config.wheel.centerOffset);

    this.isRotating = false;
    this.visible = true;
  }

  public rotateOnce(clockwise: boolean, duration = 1): void {
    if (this.isRotating) {
      console.error("ERROR: Why the fuck???");
      return;
    }
    console.log("rotate")

    this.isRotating = true;

    const angle = clockwise ? rotationDegrees : -rotationDegrees;

    gsap.to(this.image, {
      rotation: Mathematics.degreesToRadians(this.image.angle + angle),
      duration: duration,
      ease: "ease",
      onComplete: () => {
        this.isRotating = false;
      },
    });

    gsap.to(this.shadow, {
      rotation: Mathematics.degreesToRadians(this.image.angle + angle),
      duration: duration,
      ease: "ease",
    });
  }
}
