export abstract class Mathematics {
  public static readonly TAU = Math.PI * 2;
  public static readonly HALF_PI = Math.PI / 2;

  public static degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  public static radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }
}
