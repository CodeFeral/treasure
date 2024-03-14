export abstract class EventLock {
  private static flag: boolean = false;
  private static timer: number | null = null;
  private static buffer: number = 50;

  public static status(): boolean {
    return this.flag;
  }

  public static lock(): void {
    this.flag = true;
  }

  public static unlockAfter(after: number): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(() => {
      this.flag = false;
    }, after + this.buffer);
  }
}
