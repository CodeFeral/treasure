import { DoorConfig } from "./prefabs/Door";
import { ShineConfig } from "./prefabs/Shine";
import { WheelConfig } from "./prefabs/Wheel";
import { InputConfig } from "./scenes/Game";

type Config = {
  input: InputConfig;
  wheel: WheelConfig;
  door: DoorConfig;
  shine: ShineConfig;
};

export default {
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
  shine: {
    left: {
      offset: {
        x: -500,
        y: -40,
      },
      animation: {
        scale: 1,
        blinkDuration: 2,
        spinDuration: 16,
        alpha: 0.3,
      },
    },
    middle: {
      offset: {
        x: -100,
        y: -20,
      },
      animation: {
        alpha: 0.2,
        scale: 1,
        blinkDuration: 3,
        spinDuration: 20,
      },
    },
    right: {
      offset: {
        x: 160,
        y: 340,
      },
      animation: {
        alpha: 0.5,
        scale: 1,
        blinkDuration: 2.5,
        spinDuration: 18,
      },
    },
  },
} as Config;
