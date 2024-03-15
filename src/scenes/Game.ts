import Scene from "../core/Scene";
import { Background } from "../prefabs/Background";
import { Door } from "../prefabs/Door";
import { Shine } from "../prefabs/Shine";
import { InputZones } from "../prefabs/InputZones";
import { Logic } from "../core/Logic";
import { Wheel } from "../prefabs/Wheel";

export default class Game extends Scene {
  name = "Game";

  private background!: Background;
  private wheel!: Wheel;
  private door!: Door;
  private shine!: Shine;
  private inputZones!: InputZones;

  load() {
    Logic.initialize(this);

    this.background = new Background();
    this.door = new Door();
    this.wheel = new Wheel();
    this.shine = new Shine();
    this.inputZones = new InputZones();
    this.addChild(
      this.background,
      this.door,
      this.wheel,
      this.shine,
      this.inputZones
    );

    this.onResize(window.innerWidth, window.innerHeight);

    Logic.start();
  }

  onResize(width: number, height: number): void {
    this.background.resize(width, height);

    this.wheel.scale.set(this.background.scaleFactor);
    this.wheel.center(width, height);

    this.door.scale.set(this.background.scaleFactor);
    this.door.center(width, height);

    this.shine.scale.set(this.background.scaleFactor);
    this.shine.center(width, height);

    this.inputZones.scale.set(this.background.scaleFactor);
    this.inputZones.center(width, height);
  }

  public setClosed(): void {
    this.door.setClosed();
    this.wheel.visible = true;
    this.shine.visible = false;
    this.inputZones.visible = true;
  }

  public setOpen(): void {
    this.door.setOpen();
    this.wheel.visible = false;
    this.shine.visible = true;
    this.inputZones.visible = false;
  }

  public spinClockwse(duration: number): void {
    this.wheel.rotateOnce(true, duration);
  }

  public spinCounterClockwse(duration: number): void {
    this.wheel.rotateOnce(false, duration);
  }

  public continuousRotation(duration: number): void {
    this.wheel.rotateContinuous(duration);
  }
}
