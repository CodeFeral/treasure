import { WheelConfig } from "./prefabs/Wheel";
import { GameConfig, InputConfig } from "./scenes/Game";

type Config = {
  game: GameConfig;
  input: InputConfig;
  wheel: WheelConfig;
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
    shadowOffset: {
      x: -30,
      y: 30,
    },
  },
} as Config;
