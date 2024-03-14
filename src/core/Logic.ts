import config from "../config";
import Game from "../scenes/Game";
import { EventLock } from "./EventLock";

export type LogicConfig = {
  spinDuration: number;
};

export abstract class Logic {
  private static gameScene: Game;

  public static initialize(gameScene: Game): void {
    this.gameScene = gameScene;
  }

  public static close(): void {
    this.gameScene.setClosed();
  }

  public static open(): void {
    this.gameScene.setOpen();
  }

  public static clockwise(): void {
    if (EventLock.status()) {
      return;
    }
    EventLock.lock();

    this.gameScene.spinClockwse();
    EventLock.unlockAfter(config.logic.spinDuration * 1000);
  }

  public static counterClockwise(): void {
    if (EventLock.status()) {
      return;
    }
    EventLock.lock();

    this.gameScene.spinCounterClockwse();
    EventLock.unlockAfter(config.logic.spinDuration * 1000);
  }
}
