import Scene from "../core/Scene";
import { Wheel } from "../prefabs/Wheel";
import { Background } from "../prefabs/Background";
import { Door } from "../prefabs/Door";
import { Shine } from "../prefabs/Shine";

export type InputConfig = {
  spinDuration: number;
};

export default class Game extends Scene {
  name = "Game";

  private background!: Background;
  private wheel!: Wheel;
  private door!: Door;
  private shine!: Shine;

  load() {
    this.background = new Background();

    this.door = new Door();
    this.wheel = new Wheel();
    this.shine = new Shine();

    this.onResize(window.innerWidth, window.innerHeight);

    this.addChild(this.background, this.door, this.wheel, this.shine);

    this.door.setClosed();
    this.wheel.visible = true;
    this.shine.visible = false;
  }

  async start() {
    // TEST, LOAD
    window.addEventListener("pointerdown", () => {
      // this.wheel.rotate(config.input.spinDuration, true);
      // this.door.setOpen();
      this.shine.visible = true;
    });
    window.addEventListener("pointerup", () => {
      // this.wheel.rotate(config.input.spinDuration, false);
      // this.door.setClosed();
      this.shine.visible = false;
    });
  }

  onResize(width: number, height: number): void {
    this.background.resize(width, height);

    this.wheel.scale.set(this.background.scaleFactor);
    this.wheel.center(width, height);

    this.door.scale.set(this.background.scaleFactor);
    this.door.center(width, height);

    this.shine.scale.set(this.background.scaleFactor);
    this.shine.center(width, height);
  }
}
