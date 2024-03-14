import config from "../config";
import gsap from "gsap";
import { Container, Sprite } from "pixi.js";
import { Mathematics } from "../utils/Mathematics";
import { Vector } from "../utils/misc";

export type WheelConfig = {
  shadowOffset: Vector;
};

const rotationDegrees: number = 60;

export class Wheel extends Container {
  private image: Sprite;
  private shadow: Sprite;
  private isRotating: boolean;

  constructor() {
    super();

    this.isRotating = false;

    this.shadow = Sprite.from("wheelShadow");
    this.shadow.anchor.set(0.5);

    this.image = Sprite.from("wheel");
    this.image.anchor.set(0.5);

    this.addChild(this.shadow, this.image);
  }

  public center(width: number, height: number): void {
    this.x = width / 2;
    this.y = height / 2;

    this.shadow.x = config.wheel.shadowOffset.x;
    this.shadow.y = config.wheel.shadowOffset.y;
  }

  public rotate(duration = 1, clockwise = true): void {
    if (this.isRotating) {
      console.log("WAIT");
      return;
    }
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
