import Game from "../scenes/Game";

export abstract class GameLogic {
  private static gameScene: Game;
  private static pointerDownListener: EventListener | null = null;
  private static pointerUpListener: EventListener | null = null;

  private static clearInputEvents(): void {
    if (this.pointerDownListener) {
      window.removeEventListener("pointerdown", this.pointerDownListener);
    }

    if (this.pointerUpListener) {
      window.removeEventListener("pointerup", this.pointerUpListener);
    }
  }

  private static createInputEvents(): void {
    this.pointerDownListener = () => {
      this.setOpen();
    };

    this.pointerUpListener = () => {
      this.setClosed();
    };

    window.addEventListener("pointerdown", this.pointerDownListener);
    window.addEventListener("pointerup", this.pointerUpListener);
  }

  public static setGameScene(game: Game): void {
    this.gameScene = game;

    this.clearInputEvents();
    this.createInputEvents();
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
