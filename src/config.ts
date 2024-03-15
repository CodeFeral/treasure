import { LogicConfig } from "./core/Logic";
import { InputZonesConfig } from "./prefabs/InputZones";
import { WheelConfig } from "./prefabs/Wheel";
import { DoorConfig } from "./prefabs/Door";
import { ShineConfig } from "./prefabs/Shine";
import { TimerConfig } from "./prefabs/Timer";

type Config = {
  logic: LogicConfig;
  inputZones: InputZonesConfig;
  wheel: WheelConfig;
  door: DoorConfig;
  shine: ShineConfig;
  timer: TimerConfig;
};

export default {
  logic: {
    spinDuration: 0.24,
    treasureDuration: 5,
    resetDuration: 2,
  },
  inputZones: {
    show: false,
    width: 620,
    height: 1120,
    gap: 20,
    offset: {
      x: -40,
      y: -600,
    },
  },
  wheel: {
    centerOffset: {
      x: -35,
      y: -40,
    },
    shadowOffset: {
      x: 5,
      y: -15,
    },
  },
  door: {
    closedOffset: {
      x: 60,
      y: -35,
    },
    shadowOffset: {
      x: 1530,
      y: 40,
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
  timer: {
    offset: {
      x: -1105,
      y: -145,
    },
    max: 999,
  },
} as Config;
