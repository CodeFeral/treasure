import config from "../config";
import Game from "../scenes/Game";
import { EventLock } from "./EventLock";

export type LogicConfig = {
  spinDuration: number;
  treasureDuration: number;
  resetDuration: number;
};

type Combination = {
  spins: number;
  clockwise: boolean;
};

enum GameState {
  START,
  PLAY,
  TREASURE,
  RESET,
}

// TODO: generate 1-9
export abstract class Logic {
  private static gameScene: Game;
  private static gameState: GameState;
  private static sequence: boolean[] = [];
  private static rotations: boolean[] = [];

  public static initialize(gameScene: Game): void {
    this.gameScene = gameScene;
  }

  public static start(): void {
    this.gameState = GameState.START;

    this.gameScene.setClosed();
    this.generate();

    this.play();
  }

  private static play(): void {
    this.gameState = GameState.PLAY;

    this.gameScene.startTimer();
  }

  private static treasure(): void {
    this.gameState = GameState.TREASURE;

    this.gameScene.setOpen();
    this.gameScene.stopTimer();

    setTimeout(() => {
      this.reset();
    }, config.logic.treasureDuration * 1000);
  }

  private static reset(): void {
    this.gameState = GameState.RESET;

    this.gameScene.setClosed();
    this.gameScene.stopTimer();
    this.gameScene.continuousRotation(config.logic.resetDuration);

    setTimeout(() => {
      this.start();
    }, config.logic.resetDuration * 1000);
  }

  private static generate(): void {
    this.sequence.length = 0;
    this.rotations.length = 0;

    const combination: Combination[] = [];
    for (let i = 0; i < 3; i++) {
      const spins = Math.ceil(Math.random() * 3);
      const clockwise = Math.random() > 0.5;
      combination.push({ spins: spins, clockwise: clockwise });
    }

    this.generateSequence(combination);
    this.logCombination(combination);
  }

  private static generateSequence(combination: Combination[]): void {
    this.sequence.length = 0;

    for (let i = 0; i < combination.length; i++) {
      const spins = combination[i].spins;
      const clockwise = combination[i].clockwise;
      for (let s = 0; s < spins; s++) {
        this.sequence.push(clockwise);
      }
    }
  }

  private static logCombination(combination: Combination[]): void {
    let temp: string = "";
    for (let i = 0; i < combination.length; i++) {
      temp += combination[i].spins + " ";
      temp += combination[i].clockwise ? "clockwise" : "counterclockwise";

      if (i + 1 < combination.length) {
        temp += ", ";
      }
    }
    console.clear();
    console.log("Combination:");
    console.log(temp);
  }

  private static addRotation(clockwise: boolean): void {
    this.rotations.push(clockwise);

    const index = this.rotations.length - 1;
    if (this.sequence[index] !== this.rotations[index]) {
      this.gameState = GameState.RESET;
      setTimeout(() => {
        this.reset();
      }, config.logic.spinDuration * 1000);
      return;
    }

    if (index >= this.sequence.length - 1) {
      this.gameState = GameState.TREASURE;
      setTimeout(() => {
        this.treasure();
      }, config.logic.spinDuration * 1000);
      return;
    }
  }

  public static spin(clockwise: boolean): void {
    if (EventLock.status() || this.gameState !== GameState.PLAY) {
      return;
    }
    EventLock.lock();

    this.addRotation(clockwise);
    if (clockwise) {
      this.gameScene.spinClockwse(config.logic.spinDuration);
    } else {
      this.gameScene.spinCounterClockwse(config.logic.spinDuration);
    }

    EventLock.unlockAfter(config.logic.spinDuration * 1000);
  }
}
