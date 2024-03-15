import config from "../config";
import { Container, Text, TextStyle } from "pixi.js";
import { Vector } from "../utils/misc";

export type TimerConfig = {
  offset: Vector;
  max: number;
};

export class Timer extends Container {
  private textStyle: TextStyle;
  private counterText: Text;

  private counter: number;
  private interval: number;

  constructor() {
    super();

    this.counter = 0;
    this.interval = 0;

    this.textStyle = new TextStyle({
      fontFamily: "Sans",
      fontWeight: "bold",
      fontSize: 80,
      fill: 0xffffff,
    });

    this.counterText = new Text(this.counter.toString(), this.textStyle);
    this.counterText.anchor.set(1, 0.5);
    this.counterText.x = config.timer.offset.x;
    this.counterText.y = config.timer.offset.y;

    this.addChild(this.counterText);
  }

  public center(width: number, height: number): void {
    this.x = width / 2;
    this.y = height / 2;
  }

  public startCounting(): void {
    this.counter = 0;
    this.counterText.text = this.counter.toString();
    this.resetCounter();

    this.interval = setInterval(() => {
      if (this.counter >= config.timer.max) {
        this.resetCounter();
      }

      this.counter++;
      this.counterText.text = this.counter.toString();
    }, 1000);
  }

  public resetCounter(): void {
    clearInterval(this.interval);
    this.interval = 0;
  }
}
