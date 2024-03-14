import config from "../config";
import { centerObjects } from "../utils/misc";
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

export default class Game extends Scene {
  name = "Game";

  private background!: Background;
  private wheel!: Wheel;
  private door!: Door;

  load() {
    this.background = new Background();
    this.door = new Door();
    this.wheel = new Wheel();

    this.onResize(window.innerWidth, window.innerHeight);

    this.addChild(this.background, this.door, this.wheel);
  }

  async start() { }

  onResize(width: number, height: number): void {
    centerObjects(this.wheel);
    centerObjects(this.door);

    this.background.resize(width, height);

    this.wheel.scale.set(this.background.scaleFactor * config.game.wheelScale);
    this.door.scale.set(this.background.scaleFactor * config.game.wheelScale);
  }
}
