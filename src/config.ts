import { DoorConfig } from "./prefabs/Door";
import { WheelConfig } from "./prefabs/Wheel";
import { GameConfig, InputConfig } from "./scenes/Game";

type Config = {
  game: GameConfig;
  input: InputConfig;
  wheel: WheelConfig;
  door: DoorConfig;
};

export default {
  game: {
    wheelScale: 1,
    doorScale: 1,
  },
  input: {
    spinDuration: 0.26,
  },
  wheel: {
    centerOffset: {
      x: -35,
      y: -40,
    },
    shadowOffset: {
      x: 40,
      y: 25,
    },
  },
  door: {
    closedOffset: {
      x: 60,
      y: -35,
    },
    shadowOffset: {
      x: 70,
      y: 60,
    },
    openOffset: {
      x: 1460,
      y: -20,
    },
  },
} as Config;
