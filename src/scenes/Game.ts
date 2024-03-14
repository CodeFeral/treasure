import config from "../config";
import Scene from "../core/Scene";
import { Wheel } from "../prefabs/Wheel";
import { Background } from "../prefabs/Background";
import { Door } from "../prefabs/Door";

export type GameConfig = {
  minWidth: number;
  minHeight: number;
  wheelScale: number;
  doorScale: number;
};

export type InputConfig = {
  spinDuration: number;
};

export default class Game extends Scene {
  name = "Game";

  private background!: Background;
  private wheel!: Wheel;
  private door!: Door;

  load() {
    this.background = new Background();

    this.door = new Door();
    this.door.center(window.innerWidth, window.innerHeight);

    this.wheel = new Wheel();
    this.wheel.center(window.innerWidth, window.innerHeight);

    this.onResize(window.innerWidth, window.innerHeight);

    this.addChild(this.background, this.door, this.wheel);
  }

  async start() {
    window.addEventListener("pointerdown", () => {
      this.wheel.rotate(config.input.spinDuration, true);
    });
    window.addEventListener("pointerup", () => {
      this.wheel.rotate(config.input.spinDuration, false);
    });
  }

  onResize(width: number, height: number): void {
    this.background.resize(width, height);

    this.wheel.scale.set(this.background.scaleFactor * config.game.wheelScale);
    this.wheel.center(width, height);

    this.door.scale.set(this.background.scaleFactor * config.game.doorScale);
    this.door.center(width, height);
  }
}
