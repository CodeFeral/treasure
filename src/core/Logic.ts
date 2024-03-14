import Game from "../scenes/Game";

export type LogicConfig = {
  spinDuration: number;
};

export abstract class Logic {
  private static gameScene: Game;

  public static setGameScene(game: Game): void {
    this.gameScene = game;
  }

  public static setClosed(): void {
    if (!this.gameScene) {
      console.error("ERROR: Game Scene doesn't exist yet!");
      return;
    }

    this.gameScene.setClosed();
  }

  public static setOpen(): void {
    if (!this.gameScene) {
      console.error("ERROR: Game Scene doesn't exist yet!");
      return;
    }

    this.gameScene.setOpen();
  }
}
